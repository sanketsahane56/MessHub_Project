var nodemailer = require('nodemailer');
var exe = require('../conn');

// Create a reusable transporter or fallback
var transporter = null;
try {
    // If SMTP environment variables are present, use them.
    // Otherwise configure a local / safe development transporter
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
        transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
    } else {
        // Fallback test transporter (won't crash if offline)
        transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'messhub.notifications@ethereal.email',
                pass: 'messhub123'
            }
        });
    }
} catch (e) {
    console.log("Nodemailer setup note:", e.message);
}

/**
 * Sends notifications (In-app DB record, Email via Nodemailer, and WhatsApp link)
 */
async function notifyDabbaUpdate(options) {
    var subscription_id = options.subscription_id || null;
    var customer_name = options.customer_name || 'Customer';
    var customer_mobile = options.customer_mobile || '8263905159';
    var customer_email = options.customer_email || '';
    var log_date = options.log_date || new Date().toISOString().split('T')[0];
    var meal_slot = options.meal_slot || 'Both';
    var dabbas_count = options.dabbas_count || 1;
    var action_type = options.action_type || 'Dabba Taken';
    var remaining_dabbas = options.remaining_dabbas !== undefined ? options.remaining_dabbas : 0;
    var total_dabbas = options.total_dabbas || 60;
    var branch_location = options.branch_location || 'Gangapur Gaon, Nashik';
    var admin_notes = options.admin_notes || '';

    // Title and message based on action
    var title = '';
    var messageText = '';

    if (action_type === 'Dabba Taken' || action_type === 'Admin Added') {
        title = `डबा अपडेट: ${log_date} रोजी ${dabbas_count} डबे नोंदवले गेले`;
        messageText = `नमस्कार ${customer_name}! ${log_date} रोजी तुमचे ${dabbas_count} डबे (${meal_slot}) नोंदवले गेले आहेत. तुमचे आता एकूण शिल्लक डबे: ${remaining_dabbas} (एकूण कोटा: ${total_dabbas}) आहेत.`;
    } else if (action_type === 'Admin Decreased' || action_type === 'Adjustment') {
        title = `डबा ॲडजस्टमेंट: डब्यांमध्ये बदल करण्यात आला`;
        messageText = `नमस्कार ${customer_name}! ${log_date} च्या नोंदीत बदल करून डबे कमी/ॲडजस्ट करण्यात आले आहेत (${dabbas_count} डबा बदल). तुमचे अद्ययावत शिल्लक डबे: ${remaining_dabbas} आहेत.`;
    } else {
        title = `डबा सेवा सूचना - MessHub`;
        messageText = `नमस्कार ${customer_name}! ${log_date} साठी तुमची नोंद अद्ययावत करण्यात आली आहे. शिल्लक डबे: ${remaining_dabbas}.`;
    }

    if (admin_notes) {
        messageText += ` (टीप: ${admin_notes})`;
    }

    // Build WhatsApp URL
    var cleanMobile = customer_mobile.replace(/[^0-9]/g, '');
    if (cleanMobile.length === 10) cleanMobile = '91' + cleanMobile;
    var waText = `🍱 *MessHub डबा अपडेट*\n\n` +
        `👤 ग्राहक नाव: ${customer_name}\n` +
        `📅 तारीख: ${log_date}\n` +
        `📦 घेतलेले डबे: ${dabbas_count} (${meal_slot})\n` +
        `✨ शिल्लक डबे: ${remaining_dabbas} / ${total_dabbas}\n` +
        `📍 शाखा: ${branch_location}\n` +
        `📞 संपर्क: 8263905159\n\n` +
        (admin_notes ? `📝 टीप: ${admin_notes}\n\n` : '') +
        `तुमचा संपूर्ण डबा रेकॉर्ड पाहण्यासाठी खालील लिंक उघडा:\n` +
        `http://localhost:1000/my-dabbas?mobile=${customer_mobile.replace(/[^0-9]/g, '')}`;

    var whatsapp_url = `https://api.whatsapp.com/send?phone=${cleanMobile}&text=${encodeURIComponent(waText)}`;

    // 1. Save in Database `dabba_notifications`
    var email_status = 'Logged';
    try {
        var cleanName = customer_name.replace(/'/g, "''");
        var cleanTitle = title.replace(/'/g, "''");
        var cleanMsg = messageText.replace(/'/g, "''");
        var cleanWaUrl = whatsapp_url.replace(/'/g, "''");
        var subIdVal = subscription_id ? `'${subscription_id}'` : 'NULL';

        var insertSql = `INSERT INTO dabba_notifications 
            (subscription_id, customer_name, customer_mobile, customer_email, title, message, notification_type, email_status, whatsapp_url)
            VALUES (${subIdVal}, '${cleanName}', '${customer_mobile}', '${customer_email}', '${cleanTitle}', '${cleanMsg}', '${action_type}', 'Pending', '${cleanWaUrl}')`;
        var notifResult = await exe(insertSql);
    } catch (dbErr) {
        console.error("Error logging notification to DB:", dbErr.message);
    }

    // 2. Send Real Email via Nodemailer if email provided
    if (customer_email && customer_email.includes('@')) {
        try {
            var htmlTemplate = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #333; }
                    .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border-top: 5px solid #28a745; }
                    .header { background: linear-gradient(135deg, #1b3d2f 0%, #2f684a 100%); padding: 25px; text-align: center; color: white; }
                    .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
                    .header p { margin: 5px 0 0 0; font-size: 14px; opacity: 0.9; }
                    .content { padding: 30px; }
                    .badge { display: inline-block; padding: 6px 14px; background: #e8f5e9; color: #2e7d32; font-weight: bold; border-radius: 50px; font-size: 13px; margin-bottom: 15px; }
                    .status-box { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 10px; padding: 20px; margin: 20px 0; }
                    .status-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #dee2e6; }
                    .status-row:last-child { border-bottom: none; font-weight: bold; font-size: 16px; color: #1b3d2f; }
                    .balance-card { background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%); color: #000; padding: 18px; border-radius: 10px; text-align: center; margin: 20px 0; }
                    .balance-card h3 { margin: 0; font-size: 28px; }
                    .btn { display: inline-block; padding: 12px 28px; background: #1b3d2f; color: #ffffff !important; text-decoration: none; border-radius: 6px; font-weight: bold; text-align: center; margin-top: 15px; }
                    .footer { background: #f1f3f5; padding: 18px; text-align: center; font-size: 12px; color: #6c757d; }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="header">
                        <h1>🍱 MessHub Tiffin Service</h1>
                        <p>घरपोच स्वादिष्ट व पौष्टिक जेवण | Daily Tiffin Tracker</p>
                    </div>
                    <div class="content">
                        <div class="badge">✓ डबा अपडेट / Daily Attendance Alert</div>
                        <h2>नमस्कार ${customer_name},</h2>
                        <p style="font-size: 15px; line-height: 1.6;">
                            तुमच्या डबा सेवेची आजची नोंद यशस्वीरीत्या करण्यात आली आहे. खालील तपशील तपासा:
                        </p>
                        
                        <div class="status-box">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 8px 0; color: #6c757d;">📅 तारीख (Date):</td>
                                    <td style="padding: 8px 0; text-align: right; font-weight: 600;">${log_date}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #6c757d;">📦 घेतलेले डबे (Count):</td>
                                    <td style="padding: 8px 0; text-align: right; font-weight: 600; color: #28a745;">${dabbas_count} डबे (${meal_slot})</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #6c757d;">⚙️ प्रकार (Action):</td>
                                    <td style="padding: 8px 0; text-align: right; font-weight: 600;">${action_type}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; color: #6c757d;">📍 शाखा (Branch):</td>
                                    <td style="padding: 8px 0; text-align: right; font-weight: 600;">${branch_location}</td>
                                </tr>
                                ${admin_notes ? `
                                <tr>
                                    <td style="padding: 8px 0; color: #6c757d;">📝 टीप (Note):</td>
                                    <td style="padding: 8px 0; text-align: right;">${admin_notes}</td>
                                </tr>` : ''}
                            </table>
                        </div>

                        <div class="balance-card">
                            <div style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">तुमचे शिल्लक डबे (Remaining Dabbas)</div>
                            <h3>${remaining_dabbas} / ${total_dabbas}</h3>
                        </div>

                        <div style="text-align: center;">
                            <a href="http://localhost:1000/my-dabbas?mobile=${customer_mobile.replace(/[^0-9]/g, '')}" class="btn">
                                📊 तुमचा डबा रेकॉर्ड ऑनलाइन पहा
                            </a>
                        </div>
                    </div>
                    <div class="footer">
                        <p>कोणतीही अडचण किंवा रजेसाठी संपर्क: <strong>📞 8263905159</strong> (WhatsApp उपलब्ध)</p>
                        <p>© 2026 MessHub. Gangapur Gaon (Nashik) & Pimpalgaon Nipani (Akole).</p>
                    </div>
                </div>
            </body>
            </html>
            `;

            var mailOptions = {
                from: '"MessHub Tiffin Service" <noreply@messhub.com>',
                to: customer_email,
                subject: `🍱 ${title} - MessHub`,
                text: messageText,
                html: htmlTemplate
            };

            if (transporter) {
                transporter.sendMail(mailOptions, function(err, info) {
                    if (err) {
                        console.log("Email dispatch note (logged safely):", err.message);
                    } else {
                        console.log("Email sent successfully to:", customer_email, info.messageId);
                    }
                });
            }
            email_status = 'Sent';
        } catch (mailErr) {
            console.log("Nodemailer error caught:", mailErr.message);
            email_status = 'Error: ' + mailErr.message;
        }
    }

    return {
        success: true,
        title: title,
        message: messageText,
        whatsapp_url: whatsapp_url,
        email_status: email_status
    };
}

module.exports = {
    notifyDabbaUpdate: notifyDabbaUpdate
};
