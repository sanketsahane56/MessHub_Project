var express = require('express');
var router = express.Router();
var exe = require('./../conn');
var url = require('url');
var notificationService = require('./../services/notification_service');


function checklogin(req, res, next) 
{
    if(req.session.admin_id != undefined)
        next();
    else 
        res.send("<script> alert('Invalid Login');location.href='/admin/login';</script>")        
}

// router.get('/' ,checklogin, async function(req, res){
//   res.render('admin/dashbord.ejs')
// });


router.get('/login',function(req, res)
{
    res.render("admin/login.ejs")
});

router.post('/do_login', async function(req, res) {
    try {
        var d = req.body;
        var sql = `SELECT * FROM admin_tbl WHERE admin_email = '${d.admin_email}' AND admin_password = '${d.admin_password}'`;
        var data = await exe(sql);
        if (data.length > 0) {
            req.session.admin_id = data[0].admin_id;
            req.session.admin_name = data[0].admin_name;
            res.redirect('/admin/');
        } else {
            res.send("<script>alert('ईमेल किंवा पासवर्ड चुकीचा आहे!'); location.href='/admin/login';</script>");
        }
    } catch (err) {
        console.error("Admin login error:", err);
        res.redirect('/admin/login');
    }
});

router.get('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/admin/login');
});

router.get('/signup',function(req, res){
    res.render("admin/signup.ejs");
});

// Dashboard

router.get('/' ,checklogin, async function(req, res){
  var sql1 = `SELECT COUNT(*) as user_admin_kyc_count FROM user_admin_kyc`;
  var user_admin_kyc_data = await exe(sql1);

  var sql1 = `SELECT COUNT(*) as user_admin_kyc_complated_count FROM user_admin_kyc_complated`;
  var user_admin_kyc_complated_data = await exe(sql1);

  var sql1 = `SELECT COUNT(*) as conact_info_count FROM conact_info`
  var conact_info_data = await exe(sql1);

  var sql1 = `SELECT COUNT(*) as mess_service_count FROM mess_service`
  var mess_service_data = await exe(sql1);

  var sql1 = `SELECT COUNT(*) as mess_blogs_count FROM mess_blogs`
  var mess_blogs_data = await exe(sql1);

  var sql1 = `SELECT COUNT(*) as menu_lunch_count FROM mess_lunch`
  var menu_lunch_data = await exe(sql1);

  var sql1 = `SELECT COUNT(*) as menu_dinner_count FROM mess_dinner`
  var menu_dinner_data = await exe(sql1);

  var bookings_data = await exe(`SELECT COUNT(*) as bookings_count FROM mess_bookings`);
  var dabbas_active = await exe(`SELECT COUNT(*) as count FROM dabba_subscriptions WHERE status = 'Active'`);
  var today_dabbas = await exe(`SELECT COALESCE(SUM(dabbas_count), 0) as count FROM dabba_daily_logs WHERE log_date = CURDATE()`);

  obj = {
    "user_admin_kyc_data":user_admin_kyc_data,
    "user_admin_kyc_complated_data":user_admin_kyc_complated_data,
    "conact_info_data":conact_info_data,
    "mess_service_data":mess_service_data,
    "mess_blogs_data":mess_blogs_data,
    "menu_lunch_data":menu_lunch_data,
    "menu_dinner_data":menu_dinner_data,
    "bookings_data": bookings_data,
    "dabbas_active": dabbas_active.length > 0 ? dabbas_active[0].count : 0,
    "today_dabbas": today_dabbas.length > 0 ? today_dabbas[0].count : 0
  }
  res.render('admin/dashbord.ejs',obj);
});

// CREATE TABLE admin_tbl (admin_id INT PRIMARY KEY AUTO_INCREMENT,admin_name VARCHAR(200),admin_mobile VARCHAR(200),admin_email VARCHAR(300),admin_password VARCHAR(200))

router.post('/do_register',async function(req, res){
    var d = req.body;
    var sql =  `INSERT INTO admin_tbl (admin_name,admin_mobile,admin_email,admin_password) 
    VALUES ('${d.admin_name}', '${d.admin_mobile}', '${d.admin_email}', '${d.admin_password}')`;
    var data = await exe(sql);
    res.redirect("/admin/signup")
});


router.post('/do_login',async function(req, res)
{
    var d = req.body;
    var sql = `SELECT * FROM admin_tbl WHERE admin_email = '${d.admin_email}' 
    AND admin_password = '${d.admin_password}'`;
    var data = await exe(sql);
    if(data.length > 0)
    {
        req.session.admin_id = data[0].admin_id;
        // res.send("<script> alert('Login Successfully');location.href='/admin/';</script>")        
        res.redirect("/admin/")     
    }
    else 
    {
        // res.send("<script> alert('Invalid Details'); history.back();</>")
        res.redirect("/admin/login")     

    }
});


router.get('/logout',  function (req, res, next)  {
    if (req.session) {
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        } else {
          return res.redirect('/admin/login');
        }
      });
    }
});




router.get('/mace_approvel_pending', async (req, res) => {
  // var user_id = req.session.user_id;
  // var sql = `SELECT * FROM user_admin_kyc WHERE user_id = '${user_id}'`;
  var sql = `SELECT * FROM user_admin_kyc`;
  var data = await exe(sql);
  obj = {
    "user_kyc_data":data,
  }
  res.render('admin/mace_approvel_pending.ejs',obj);

});


// CREATE TABLE user_admin_kyc_complated (user_id INT,user_admin_kyc_id INT PRIMARY KEY AUTO_INCREMENT,user_admin_fname VARCHAR(200),user_admin_lname VARCHAR(200),	user_admin_email VARCHAR(200),user_admin_phone VARCHAR(200),user_admin_photo VARCHAR(200), user_admin_address TEXT,user_admin_mess_name VARCHAR(200),user_admin_mess_photo VARCHAR(200),user_admin_mess_area VARCHAR(200));


router.get('/mess_approvel_pending_table/:id', async (req,res) => {

try {
  var user_admin_kyc_id = req.params.id;
  var getSql = `SELECT * FROM user_admin_kyc WHERE user_admin_kyc_id = ${user_admin_kyc_id}`;
  var MessData = await exe(getSql);
  if (MessData.length === 0) {
      return res.status(404).send('Mess Approval not found');
  }
  var d = MessData[0];

  var sql =`INSERT INTO user_admin_kyc_complated (user_id,user_admin_kyc_id,user_admin_fname,user_admin_lname,user_admin_email,user_admin_phone,user_admin_photo,user_admin_address,user_admin_mess_name,user_admin_mess_photo,user_admin_mess_area) VALUES ('${d.user_id}','${d.user_admin_kyc_id}','${d.user_admin_fname}', '${d.user_admin_lname}', '${d.user_admin_email}','${d.user_admin_phone}','${d.user_admin_photo}','${d.user_admin_address}','${d.user_admin_mess_name}','${d.user_admin_mess_photo}','${d.user_admin_mess_area}')`;

  await exe(sql);

  var deleteSql = `DELETE FROM user_admin_kyc WHERE user_admin_kyc_id = ${user_admin_kyc_id}`;
  await exe(deleteSql);
  res.redirect('/admin/mace_approvel_pending')

} catch (error) {
  res.status(500).send(error);
}

})


router.get('/mace_approvel_complated', async (req, res) => {
  // var user_id = req.session.user_id;
  var sql = `SELECT * FROM user_admin_kyc_complated `;
  var data = await exe(sql);
  obj = {
    "user_kyc_data":data,
  }
  res.render('admin/mace_approvel_complated.ejs',obj)
})

router.get('/delete_user_approval_data/:id', async (req, res) => {
    var delete_pending_data = req.params.id;
    var sql = `DELETE FROM user_admin_kyc WHERE user user_admin_kyc_id = '${delete_pending_data}'`;
    var user_admin_kyc_pending = await exe(sql);
    res.redirect('/admin/mace_approvel_pending')
});


// -------------------------------------------------------------------------------------------------------------------


router.get("/manage_contact_start_page",async function(req,res){
  var sql = `SELECT *  FROM banner WHERE banner_id = '3'`;
  var data = await exe(sql);
  obj = {
    "banner_edit_info": data[0],
  }
  res.render("admin/manage_contact_start_page.ejs",obj);
});


router.post('/save_banner1', async (req, res) => {
  if(req.files){
    var banner_image = new Date().getTime() + req.files.banner_image.name;
    req.files.banner_image.mv("public/uploads/"+banner_image)  
    var d = req.body;
    // var sql = `INSERT INTO banner (banner_image,banner_heading,banner_description) VALUES ('${banner_image}', '${d.banner_heading}','${d.banner_description}')`;
    var sql = `UPDATE banner SET banner_image = '${banner_image} , banner_heading = '${d.banner_heading}', banner_description = '${d.banner_description}' WHERE banner_id = '3'`;
    var data = await exe(sql);  
  }
  else{
    var d = req.body;
    // var sql = `INSERT INTO banner (banner_heading,banner_description) VALUES ('${d.banner_heading}','${d.banner_description}')`;
    var sql = `UPDATE banner SET banner_heading = '${d.banner_heading}', banner_description = '${d.banner_description}' WHERE banner_id = '3'`;
    var data = await exe(sql);  
  }
  res.redirect('/admin/manage_contact_start_page');
});


// contact_us page end
router.get("/location",async function(req,res){
  var data=await exe(`SELECT * FROM location`);
  // console.log(data)
  res.render("admin/location.ejs",{"location":data[0]});

});

router.post("/save_location",async function(req,res){
  var sql=`UPDATE location SET location_link ='${req.body.location_link}'`;
  var data=await exe(sql);
  // res.send(sql);
  res.redirect("/admin/location")
})

router.get("/contact_address",async function(req,res){
  var data=await exe(`SELECT * FROM conatct_address`); 
  res.render("admin/contact_address.ejs",{"contact_address":data[0]});
});

router.post("/save_contact_address",async function(req,res){
  d=req.body;
  var sql=`UPDATE conatct_address SET company_name='${d.company_name}',contact_address ='${d.contact_address}', pincode ='${d.pincode}'  , contact_mobile= '${d.contact_mobile}' `;
  var data=await exe(sql);
  res.redirect("/admin/contact_address");
});

router.get("/contact_list",async function(req,res){
  var data=await exe(`SELECT * FROM conact_info`);
  res.render("admin/contact_list.ejs",{"info":data});
});




router.get("/delete_contact_info/:id",async function(req,res){
  var data=await exe(`DELETE FROM conact_info WHERE conact_info_id='${req.params.id}'`);
  res.redirect("/admin/contact_list");
});

// ------------------------------------------------------------------------------------------------
// CREATE TABLE banner (banner_id INT PRIMARY KEY AUTO_INCREMENT,banner_image VARCHAR(200),banner_heading VARCHAR(200),banner_description VARCHAR(200));

router.get('/service_start_page', async (req, res) => {
  var sql = `SELECT *  FROM banner WHERE banner_id = '1'`;
  var data = await exe(sql);
  obj = {
    "banner_edit_info": data[0],
  }
  res.render('admin/service_start_page.ejs',obj)
});

router.post('/save_banner', async (req, res) => {
  if(req.files){
    var banner_image = new Date().getTime() + req.files.banner_image.name;
    req.files.banner_image.mv("public/uploads/"+banner_image)  
    var d = req.body;
    // var sql = `INSERT INTO banner (banner_image,banner_heading,banner_description) VALUES ('${banner_image}', '${d.banner_heading}','${d.banner_description}')`;
    var sql = `UPDATE banner SET banner_image = '${banner_image} , banner_heading = '${d.banner_heading}', banner_description = '${d.banner_description}' WHERE banner_id = '1'`;
    var data = await exe(sql);  
  }
  else{
    var d = req.body;
    // var sql = `INSERT INTO banner (banner_heading,banner_description) VALUES ('${d.banner_heading}','${d.banner_description}')`;
    var sql = `UPDATE banner SET banner_heading = '${d.banner_heading}', banner_description = '${d.banner_description}' WHERE banner_id = '1'`;
    var data = await exe(sql);  
  }
  res.redirect('/admin/service_start_page');

});


// --------------------------------------------------------------------------------------------------------------------------------

router.get('/blog_start_page', async (req, res) => {
  var sql = `SELECT *  FROM banner WHERE banner_id = '2'`;
  var data = await exe(sql);
  obj = {
    "banner_edit_info": data[0],
  }
  res.render('admin/blog_start_page.ejs',obj);
});

router.post('/save_banner2', async (req, res) => 
{
  if(req.files){
    var banner_image = new Date().getTime() + req.files.banner_image.name;
    req.files.banner_image.mv("public/uploads/"+banner_image)  
    var d = req.body;
    // var sql = `INSERT INTO banner (banner_image,banner_heading,banner_description) VALUES ('${banner_image}', '${d.banner_heading}','${d.banner_description}')`;
    var sql = `UPDATE banner SET banner_image = '${banner_image} , banner_heading = '${d.banner_heading}', banner_description = '${d.banner_description}' WHERE banner_id = '2'`;
    var data = await exe(sql);  
  }
  else{
    var d = req.body;
    // var sql = `INSERT INTO banner (banner_heading,banner_description) VALUES ('${d.banner_heading}','${d.banner_description}')`;
    var sql = `UPDATE banner SET banner_heading = '${d.banner_heading}', banner_description = '${d.banner_description}' WHERE banner_id = '2'`;
    var data = await exe(sql);  
  }
  res.redirect('/admin/blog_start_page');
});

// --------------------------------------------------------------------------------------------------------------------

router.get('/menu_start_page', async (req, res) => {
  var sql = `SELECT *  FROM banner WHERE banner_id = '4'`;
  var data = await exe(sql);
  obj = {
    "banner_edit_info": data[0],
  }
  res.render('admin/menu_start_page.ejs',obj);
});

router.get('/menu_start_page1', async (req, res) => {
  var sql = `SELECT *  FROM banner WHERE banner_id = '6'`;
  var data = await exe(sql);
  obj = {
    "banner_edit_info": data[0],
  }
  res.render('admin/menu_start_page1.ejs',obj);
});

router.post('/save_banner3', async (req , res) => {
  if(req.files){
    var banner_image = new Date().getTime() + req.files.banner_image.name;
    req.files.banner_image.mv("public/uploads/"+banner_image)  
    var d = req.body;
    // var sql = `INSERT INTO banner (banner_image,banner_heading,banner_description) VALUES ('${banner_image}', '${d.banner_heading}','${d.banner_description}')`;
    var sql = `UPDATE banner SET banner_image = '${banner_image} , banner_heading = '${d.banner_heading}', banner_description = '${d.banner_description}' WHERE banner_id = '4'`;
    var data = await exe(sql);  
  }
  else{
    var d = req.body;
    // var sql = `INSERT INTO banner (banner_heading,banner_description) VALUES ('${d.banner_heading}','${d.banner_description}')`;
    var sql = `UPDATE banner SET banner_heading = '${d.banner_heading}', banner_description = '${d.banner_description}' WHERE banner_id = '4'`;
    var data = await exe(sql);  
  }
  res.redirect('/admin/menu_start_page');
});


router.post('/save_banner4', async (req , res) => {
  if(req.files){
    var banner_image = new Date().getTime() + req.files.banner_image.name;
    req.files.banner_image.mv("public/uploads/"+banner_image)  
    var d = req.body;
    var sql = `UPDATE banner SET banner_image = '${banner_image} , banner_heading = '${d.banner_heading}', banner_description = '${d.banner_description}' WHERE banner_id = '6'`;
    var data = await exe(sql);  
  }
  else{
    var d = req.body;
    var sql = `UPDATE banner SET banner_heading = '${d.banner_heading}', banner_description = '${d.banner_description}' WHERE banner_id = '6'`;
    var data = await exe(sql);  
  }
  res.redirect('/admin/menu_start_page1');
});

// --------------------------------------------------------------------------------------------------------------------

router.get('/mess_services', async (req, res) => {
  // var sql2 = `SELECT  * from mess_service,user_tbl where mess_service.user_id = user_tbl.user_id`;
  var sql2 = `SELECT * from mess_service,user_admin_kyc_complated where user_admin_kyc_complated.user_admin_kyc_id = mess_service.user_admin_kyc_id;`;

    var mess_service_data = await exe(sql2); 
    var obj = {
        "mess_service_data":mess_service_data,
    }
  res.render('admin/mess_services.ejs',obj)
});


router.get('/delete_mess_service_data/:id', async (req, res) => {
  var id = req.params.id;
  var sql = `DELETE FROM mess_service WHERE mess_service_id = '${id}'`;
  var data = await exe(sql);
  res.redirect('/admin/mess_services');
});


router.get('/blog', async (req, res) => {
  var sql2 = `SELECT  * from mess_blogs,user_tbl where mess_blogs.user_id = user_tbl.user_id`;
  var mess_blog_data = await exe(sql2); 
  obj = {
    "mess_blog_data":mess_blog_data,
  }
  res.render('admin/blog.ejs',obj)
});


router.get('/delete_mess_blog/:id', async (req, res) => {
  var id = req.params.id;
  var sql = `DELETE FROM mess_blogs WHERE mess_blogs_id = '${id}'`;
  var data = await exe(sql);
  res.redirect('/admin/mess_services');
});


router.get('/menu_lunch', async (req, res) => {
  var sql = `SELECT * from mess_lunch,user_admin_kyc_complated where user_admin_kyc_complated.user_admin_kyc_id = mess_lunch.user_admin_kyc_id;`
  var menu_meal_lunch = await exe(sql);
  obj = {
    "menu_meal_lunch":menu_meal_lunch,
  }
  res.render('admin/menu_lunch.ejs',obj);
});


router.get('/delete_menu_meal_lunch/:id',checklogin, async (req, res) => {
  var id = req.params.id;
  var sql = `DELETE FROM mess_lunch WHERE mess_lunch_id = '${id}'`;
  var data = await exe(sql);
  res.redirect('/admin/menu_lunch');
});


router.get('/menu_dinner', async (req, res) => {
  var sql = `SELECT * from mess_dinner,user_admin_kyc_complated where user_admin_kyc_complated.user_admin_kyc_id = mess_dinner.user_admin_kyc_id;`
  var menu_meal_dinner = await exe(sql);
  obj = {
    "menu_meal_dinner":menu_meal_dinner,
  }
  res.render('admin/menu_dinner.ejs',obj);
});


router.get('/delete_menu_meal_dinner/:id',checklogin, async (req, res) => {
  var id = req.params.id;
  var sql = `DELETE FROM mess_dinner WHERE mess_dinner_id = '${id}'`;
  var data = await exe(sql);
  res.redirect('/admin/menu_dinner');
});
/////////////
//Rohini's work

//Home page started
//Slider started
//CREATE TABLE slider(slider_id INT PRIMARY KEY AUTO_INCREMENT,slider_title TEXT, slider_subtitle TEXT, slider_info TEXT, slider_image TEXT);
router.get('/slider',async function(req, res){
  var slider = await exe(`SELECT * FROM slider`);
  var obj = {"slider":slider[0]};
  res.render('admin/slider.ejs',obj);
  });
  router.post('/save_slider',async function(req, res){
    var d = req.body;
  var file_name = new Date().getTime()+".png";
  req.files.slider_image.mv("public/uploads/home/"+file_name);

  //Insert
    // var sql = `INSERT INTO slider(slider_title,slider_subtitle,slider_info,slider_image) VALUES('${d.slider_title}','${d.slider_subtitle}','${d.slider_info}','${file_name}')`;

  //Update
  var sql = `UPDATE slider SET slider_title = '${d.slider_title}', slider_subtitle = '${d.slider_subtitle}', slider_info = '${d.slider_info}', slider_image = '${file_name}' WHERE slider_id = ${d.slider_id}`;

      var data = await exe(sql);
      res.redirect('/admin/slider');
  });
  //Slider end
  
//CREATE TABLE about1(about1_id INT PRIMARY KEY AUTO_INCREMENT, about1_heading TEXT, about1_description TEXT, about1_image TEXT);
//Home - About Us 1 started
router.get('/home_about1', async function(req, res){
var about1 = await exe(`SELECT * FROM about1`);
var obj = {"about1":about1[0]};
res.render('admin/home_about1.ejs',obj);
});
router.post("/save_home_about1", async function(req,res){
var d = req.body;
var file_name = new Date().getTime()+".png";
req.files.about1_image.mv("public/uploads/aboutus/"+file_name);
//Insert
// var sql = `INSERT INTO about1(about1_heading,about1_description,about1_image) VALUES ('${d.about1_heading}','${d.about1_description}','${file_name}')`;

//Update
var sql = `UPDATE about1 SET about1_heading = '${d.about1_heading}', about1_description = '${d.about1_description}', about1_image = '${file_name}' WHERE about1_id = ${d.about1_id}`;

var data = await exe(sql);
res.redirect("/admin/home_about1");
});
//Home- About Us 1 end

//Home - About Us 2 started
router.get('/home_about2', async function(req, res){
var about2 = await exe(`SELECT * FROM about2`);
var obj = {"about2":about2[0]};
res.render('admin/home_about2.ejs',obj);
});
router.post("/save_home_about2", async function(req,res){
var d = req.body;
var file_name = new Date().getTime()+".png";
req.files.about2_image.mv("public/uploads/aboutus/"+file_name);
//Insert
  // var sql = `INSERT INTO about2(about2_heading,about2_description,about2_image) VALUES ('${d.about2_heading}','${d.about2_description}','${file_name}')`;

//Update
var sql = `UPDATE about2 SET about2_heading = '${d.about2_heading}', about2_description = '${d.about2_description}', about2_image = '${file_name}' WHERE about2_id = ${d.about2_id}`;

var data = await exe(sql);
res.redirect("/admin/home_about2");
});
//Home - About Us 2 end

//Home - About Us 3 started
router.get('/home_about3', async function(req, res){
var about3 = await exe(`SELECT * FROM about3`);
var obj = {"about3":about3[0]};
res.render('admin/home_about3.ejs',obj);
});
router.post("/save_home_about3", async function(req,res){
var d = req.body;
var file_name = new Date().getTime()+".png";
req.files.about3_image.mv("public/uploads/aboutus/"+file_name);
//Insert
  // var sql = `INSERT INTO about3(about3_heading,about3_description,about3_image) VALUES ('${d.about3_heading}','${d.about3_description}','${file_name}')`;

//Update
var sql = `UPDATE about3 SET about3_heading = '${d.about3_heading}', about3_description = '${d.about3_description}', about3_image = '${file_name}' WHERE about3_id = ${d.about3_id}`;

var data = await exe(sql);
res.redirect("/admin/home_about3");
});
//Home- About Us 3 end

//Our Meal Plans 
//CREATE TABLE home1(home1_id INT PRIMARY KEY AUTO_INCREMENT, home1_heading TEXT, home1_title TEXT, home1_image TEXT);
router.get('/home1',async function(req, res){
var home1_list = await exe(`SELECT * FROM home1`);
var obj = {"home1_list":home1_list};
res.render('admin/home1.ejs',obj);
});
router.post("/save_home1", async function(req,res){
var d = req.body;
var file_name = new Date().getTime()+".png";
req.files.home1_image.mv("public/uploads/home/"+file_name);
//Insert
var sql = `INSERT INTO home1(home1_heading,home1_title,home1_image) VALUES('${d.home1_heading}','${d.home1_title}','${file_name}')`;
var data = await exe(sql);
res.redirect("/admin/home1");
});

router.get('/edit_home1/:id',async function(req,res){
var id = req.params.id;
var home1 = await exe(`SELECT * FROM home1 WHERE home1_id = ${id}`);
var obj = {"home1":home1[0]};
res.render('admin/edit_home1.ejs',obj);
});
router.get("/delete_home1/:id", async function(req,res){
var id = req.params.id;
var sql = `DELETE FROM home1 WHERE home1_id = ${id}`;
var data = await exe(sql);
res.redirect("/admin/home1");
});

router.post('/update_home1',async function(req, res){
var d = req.body;
var file_name = new Date().getTime()+".png";
req.files.home1_image.mv("public/uploads/home/"+file_name);

//Update
var sql = `UPDATE home1 SET home1_heading = '${d.home1_heading}',home1_title = '${d.home1_title}',home1_image = '${file_name}' WHERE home1_id = ${d.home1_id}`;
  
  var data = await exe(sql);
  res.redirect('/admin/home1');
  });
//Our Meal Plans End

//Our Customer Says
//Background
//CREATE TABLE home2_bg(home2_id INT PRIMARY KEY AUTO_INCREMENT, home2_heading TEXT, home2_image TEXT );
router.get('/home2_bg',async function(req, res){
var home2_bg = await exe(`SELECT * FROM home2_bg`);
  var obj = {"home2_bg":home2_bg[0]};
  res.render('admin/home2_bg.ejs',obj);
});
router.post('/save_home2_bg',async function(req, res){
  var d = req.body;
  var file_name = new Date().getTime()+".png";
  req.files.home2_image.mv("public/uploads/home/"+file_name);
  //Insert
  // var sql = `INSERT INTO home2_bg(home2_heading,home2_image) VALUES ('${d.home2_heading}','${file_name}')`;
  //Update
  var sql = `UPDATE home2_bg SET home2_heading = '${d.home2_heading}',home2_image = '${file_name}' WHERE home2_id = ${d.home2_id}`
  var data = await exe(sql);
  res.redirect('/admin/home2_bg');
  });
  //Background End
  // CREATE TABLE reviews(review_id INT PRIMARY KEY AUTO_INCREMENT, reviewer_name TEXT,review_desc TEXT, reviewer_img TEXT);
  router.get('/reviews',async function(req,res){
      var reviews_list = await exe(`SELECT * FROM reviews`);
      var obj = {"reviews_list":reviews_list};
      res.render('admin/reviews.ejs',obj);
    });
    router.post('/save_reviews',async function(req, res){
      var d = req.body;
      var file_name = new Date().getTime()+".png";
      req.files.reviewer_img.mv("public/uploads/home/"+file_name);
      //Insert
        var sql = `INSERT INTO reviews(reviewer_name,review_desc,reviewer_img) VALUES ("${d.reviewer_name}","${d.review_desc}","${file_name}")`;
        var data = await exe(sql);
        res.redirect('/admin/reviews');
        });
    
        router.get('/edit_reviews/:id',async function(req,res){
          var id = req.params.id;
          var reviews = await exe(`SELECT * FROM reviews WHERE review_id = ${id}`);
          var obj = {"reviews":reviews[0]}
          res.render('admin/edit_reviews.ejs',obj);
        });
        router.get("/delete_reviews/:id", async function(req,res){
          var id = req.params.id;
          var sql = `DELETE FROM reviews WHERE review_id = ${id}`;
          var data = await exe(sql);
          res.redirect('/admin/reviews');
          });
        router.post('/update_reviews',async function(req,res){
          var d = req.body;
          var file_name = new Date().getTime()+".png";
          req.files.reviewer_img.mv("public/uploads/home/"+file_name);
          //Update
          var sql = `UPDATE reviews SET reviewer_name = "${d.reviewer_name}",review_desc ="${d.review_desc}",reviewer_img = "${file_name}" 
          WHERE review_id = ${d.review_id}`;
          var data = await exe(sql);
          res.redirect('/admin/reviews');
        });
        router.get('/reviews_API',async function(req,res){
          var reviews_list = await exe(`SELECT * FROM reviews`);
          res.send(reviews_list);
        })
        //Reviews End

//Home End


//About Us Started

//About Us Banner started
//CREATE TABLE aboutus_banner(banner_id INT PRIMARY KEY AUTO_INCREMENT, aboutus_heading TEXT, aboutus_banner_image TEXT);

router.get('/aboutus_banner', async function(req, res){
  var aboutus_banner = await exe(`SELECT * FROM aboutus_banner`);
  var obj = {"aboutus_banner":aboutus_banner[0]};
  res.render('admin/aboutus_banner.ejs',obj);
});

router.post("/save_aboutus_banner", async function(req,res){
  var d = req.body;
  var file_name = new Date().getTime()+".png";
  req.files.aboutus_banner_image.mv("public/uploads/aboutus/"+file_name);

  //Insert 
  // var sql = `INSERT INTO aboutus_banner(aboutus_heading,aboutus_banner_image) VALUES ('${d.aboutus_heading}','${file_name}')`;

  //Update
  var sql = `UPDATE aboutus_banner SET aboutus_heading = '${d.aboutus_heading}', aboutus_banner_image
  = '${file_name}' WHERE banner_id = ${d.banner_id}`;

  var data = await exe(sql);
  res.redirect("/admin/aboutus_banner");
});
//About Us Banner end
//CREATE TABLE about1(about1_id INT PRIMARY KEY AUTO_INCREMENT, about1_heading TEXT, about1_description TEXT, about1_image TEXT);
//About Us 1 started
router.get('/about1', async function(req, res){
var about1 = await exe(`SELECT * FROM about1`);
var obj = {"about1":about1[0]};
res.render('admin/about1.ejs',obj);
});
router.post("/save_about1", async function(req,res){
var d = req.body;
var file_name = new Date().getTime()+".png";
req.files.about1_image.mv("public/uploads/aboutus/"+file_name);
//Insert
// var sql = `INSERT INTO about1(about1_heading,about1_description,about1_image) VALUES ('${d.about1_heading}','${d.about1_description}','${file_name}')`;

//Update
var sql = `UPDATE about1 SET about1_heading = '${d.about1_heading}', about1_description = '${d.about1_description}', about1_image = '${file_name}' WHERE about1_id = ${d.about1_id}`;

var data = await exe(sql);
res.redirect("/admin/about1");
});
//About Us 1 end

//CREATE TABLE about2(about2_id INT PRIMARY KEY AUTO_INCREMENT, about2_heading TEXT, about2_description TEXT, about2_image TEXT);
//About Us 2 started
router.get('/about2', async function(req, res){
var about2 = await exe(`SELECT * FROM about2`);
var obj = {"about2":about2[0]};
res.render('admin/about2.ejs',obj);
});
router.post("/save_about2", async function(req,res){
var d = req.body;
var file_name = new Date().getTime()+".png";
req.files.about2_image.mv("public/uploads/aboutus/"+file_name);
//Insert
  // var sql = `INSERT INTO about2(about2_heading,about2_description,about2_image) VALUES ('${d.about2_heading}','${d.about2_description}','${file_name}')`;

//Update
var sql = `UPDATE about2 SET about2_heading = '${d.about2_heading}', about2_description = '${d.about2_description}', about2_image = '${file_name}' WHERE about2_id = ${d.about2_id}`;

var data = await exe(sql);
res.redirect("/admin/about2");
});
//About Us 2 end

//CREATE TABLE about3(about3_id INT PRIMARY KEY AUTO_INCREMENT, about3_heading TEXT, about3_description TEXT, about3_image TEXT);
//About Us 3 started
router.get('/about3', async function(req, res){
var about3 = await exe(`SELECT * FROM about3`);
var obj = {"about3":about3[0]};
res.render('admin/about3.ejs',obj);
});
router.post("/save_about3", async function(req,res){
var d = req.body;
var file_name = new Date().getTime()+".png";
req.files.about3_image.mv("public/uploads/aboutus/"+file_name);
//Insert
  // var sql = `INSERT INTO about3(about3_heading,about3_description,about3_image) VALUES ('${d.about3_heading}','${d.about3_description}','${file_name}')`;

//Update
var sql = `UPDATE about3 SET about3_heading = '${d.about3_heading}', about3_description = '${d.about3_description}', about3_image = '${file_name}' WHERE about3_id = ${d.about3_id}`;

var data = await exe(sql);
res.redirect("/admin/about3");
});
//About Us 3 end
//About Us End

//Blogs started
//CREATE TABLE blogs(blog_id INT PRIMARY KEY AUTO_INCREMENT, blog_title TEXT, blog_description TEXT, blog_image TEXT);
router.get('/blog', async function(req, res){
var blogs = await exe(`SELECT * FROM blogs`);
var obj = {"blogs":blogs};
res.render('admin/blog.ejs',obj);
});

router.post("/save_blog", async function(req,res){
  var d = req.body;
  var file_name = new Date().getTime()+".png";
  req.files.blog_image.mv("public/uploads/blogs/"+file_name);
  var sql = `INSERT INTO blogs(blog_title,blog_description,blog_image) VALUES ('${d.blog_title}','${d.blog_description}','${file_name}') `;
  var data = await exe(sql);
  res.redirect("/admin/blog");
});

router.get('/edit_blog/:id', checklogin, async function(req,res){
  var id = req.params.id;
  var sql = `SELECT * FROM blogs WHERE blog_id = ${id}`;
  var update_blog = await exe(sql);
  var obj = {"update_blog":update_blog[0]};
  res.render('admin/edit_blog.ejs',obj);
});
router.post("/update_blog", async function(req,res){
  var d = req.body;
  var file_name = new Date().getTime()+".png";
  req.files.blog_image.mv("public/uploads/blogs/"+file_name);
  var sql = `UPDATE blogs SET blog_title = '${d.blog_title}', blog_description = '${d.blog_description}', blog_image = '${file_name}' WHERE blog_id = ${d.blog_id}`;
    var data = await exe(sql);
    res.redirect("/admin/blog");
});

router.get("/delete_blog/:id", async function(req,res){
  var id = req.params.id;
  var sql = `DELETE FROM blogs WHERE blog_id = ${id}`;
  var data = await exe(sql);
  res.redirect("/admin/blog");
});

router.get('/blogs_api',async function(req,res){
  var API_data = await exe(`SELECT * FROM blogs`);
  res.send(API_data);
});

//Blog Banner started
//CREATE TABLE blog_banner(banner_id INT PRIMARY KEY AUTO_INCREMENT, blog_heading TEXT, blog_banner_image TEXT);

router.get('/blog_banner', async function(req, res){
  var blog_banner = await exe(`SELECT * FROM blog_banner`);
  var obj = {"blog_banner":blog_banner[0]};
  res.render('admin/blog_banner.ejs',obj);
});

router.post("/save_blog_banner", async function(req,res){
  var d = req.body;
  var file_name = new Date().getTime()+".png";
  req.files.blog_banner_image.mv("public/uploads/blogs/"+file_name);

  //Insert 
  // var sql = `INSERT INTO blog_banner(blog_heading,blog_banner_image) VALUES ('${d.blog_heading}','${file_name}')`;

  //Update
  var sql = `UPDATE blog_banner SET blog_heading = '${d.blog_heading}', blog_banner_image
  = '${file_name}' WHERE banner_id = ${d.banner_id}`;
  
  var data = await exe(sql);
  res.redirect("/admin/blog_banner");
});

//Blogs end
// Company Info on home page started
//CREATE TABLE company_info(company_id INT PRIMARY KEY AUTO_INCREMENT, address1 TEXT, address2 TEXT, address3 TEXT, contact TEXT, mess_name TEXT, mess_info TEXT, logo TEXT);
router.get('/company_info', async function(req, res){
  var company_info = await exe(`SELECT * FROM company_info`);
  var obj = {"company_info":company_info[0]};
  res.render('admin/company_info.ejs',obj);
  });
  router.post("/save_company_info", async function(req,res){
    var d = req.body;
    var file_name = new Date().getTime()+".png";
    req.files.logo.mv("public/uploads/home/"+file_name);

    //Insert
    // var sql = `INSERT INTO company_info(address1,address2,address3,contact,mess_name,mess_info,logo) VALUES ('${d.address1}','${d.address2}','${d.address3}','${d.contact}','${d.mess_name}','${d.mess_info}','${file_name}')`;

    //Update
     var sql = `UPDATE company_info SET address1 = '${d.address1}', address2 ='${d.address2}', address3 = '${d.address3}', contact = '${d.contact}',mess_name = '${d.mess_name}', mess_info = '${d.mess_info}', logo = '${file_name}' WHERE company_id = ${d.company_id}`;

    var data = await exe(sql);
    res.redirect("/admin/company_info");
    });

    //Company Info on home page end

//Rohini's work end



// Mess Bookings Management
router.get('/bookings', checklogin, async function(req, res) {
  var branch = req.query.branch || '';
  var status = req.query.status || '';
  
  var whereClause = 'WHERE 1=1';
  if (branch) {
    whereClause += ` AND branch_location LIKE '%${branch}%'`;
  }
  if (status) {
    whereClause += ` AND booking_status = '${status}'`;
  }

  var bookings = await exe(`SELECT * FROM mess_bookings ${whereClause} ORDER BY booking_id DESC`);
  var totalCount = await exe(`SELECT COUNT(*) as count FROM mess_bookings`);
  var pendingCount = await exe(`SELECT COUNT(*) as count FROM mess_bookings WHERE booking_status = 'Pending'`);
  var confirmedCount = await exe(`SELECT COUNT(*) as count FROM mess_bookings WHERE booking_status = 'Confirmed'`);
  var totalRevenue = await exe(`SELECT SUM(price) as total FROM mess_bookings WHERE booking_status != 'Cancelled'`);

  var obj = {
    "bookings": bookings,
    "totalCount": totalCount[0].count,
    "pendingCount": pendingCount[0].count,
    "confirmedCount": confirmedCount[0].count,
    "totalRevenue": totalRevenue[0].total || 0,
    "selectedBranch": branch,
    "selectedStatus": status
  };
  res.render('admin/bookings.ejs', obj);
});

router.post('/update_booking_status', checklogin, async function(req, res) {
  var d = req.body;
  await exe(`UPDATE mess_bookings SET booking_status = '${d.status}' WHERE booking_id = '${d.booking_id}'`);
  res.redirect('/admin/bookings');
});

router.get('/delete_booking/:id', checklogin, async function(req, res) {
  await exe(`DELETE FROM mess_bookings WHERE booking_id = '${req.params.id}'`);
  res.redirect('/admin/bookings');
});

// ==========================================
// DABBA TRACKING & ATTENDANCE MANAGEMENT
// ==========================================

router.get('/dabbas', checklogin, async function(req, res) {
  var branch = req.query.branch || '';
  var status = req.query.status || '';
  var search = req.query.search || '';

  var whereClause = 'WHERE 1=1';
  if (branch) {
    whereClause += ` AND branch_location LIKE '%${branch}%'`;
  }
  if (status) {
    whereClause += ` AND status = '${status}'`;
  }
  if (search) {
    whereClause += ` AND (customer_name LIKE '%${search}%' OR customer_mobile LIKE '%${search}%' OR customer_email LIKE '%${search}%')`;
  }

  var subscribers = await exe(`SELECT *, DATE_FORMAT(start_date, '%Y-%m-%d') as start_date FROM dabba_subscriptions ${whereClause} ORDER BY subscription_id DESC`);
  var activeCountRes = await exe(`SELECT COUNT(*) as count FROM dabba_subscriptions WHERE status = 'Active'`);
  var todayDabbasRes = await exe(`SELECT COALESCE(SUM(dabbas_count), 0) as count FROM dabba_daily_logs WHERE log_date = CURDATE()`);
  var totalQuotaRes = await exe(`SELECT COALESCE(SUM(total_dabbas), 0) as total FROM dabba_subscriptions WHERE status = 'Active'`);
  var totalRemainingRes = await exe(`SELECT COALESCE(SUM(remaining_dabbas), 0) as total FROM dabba_subscriptions WHERE status = 'Active'`);

  var todayDate = new Date().toISOString().split('T')[0];

  var obj = {
    "subscribers": subscribers,
    "activeCount": activeCountRes[0].count,
    "todayDabbasCount": todayDabbasRes[0].count,
    "totalQuotaSum": totalQuotaRes[0].total,
    "totalRemainingSum": totalRemainingRes[0].total,
    "branch": branch,
    "status": status,
    "search": search,
    "todayDate": todayDate
  };
  res.render('admin/dabbas.ejs', obj);
});

router.get('/dabba_customer/:id', checklogin, async function(req, res) {
  var subId = req.params.id;
  var subRes = await exe(`SELECT *, DATE_FORMAT(start_date, '%d %b %Y') as start_date FROM dabba_subscriptions WHERE subscription_id = '${subId}'`);
  if (subRes.length === 0) return res.redirect('/admin/dabbas');

  var sub = subRes[0];
  var logs = await exe(`SELECT *, DATE_FORMAT(log_date, '%d-%m-%Y') as log_date FROM dabba_daily_logs WHERE subscription_id = '${subId}' ORDER BY log_id DESC`);
  var notifications = await exe(`SELECT *, DATE_FORMAT(created_at, '%d-%m-%Y %H:%i') as created_at FROM dabba_notifications WHERE subscription_id = '${subId}' ORDER BY notification_id DESC LIMIT 25`);
  var todayDate = new Date().toISOString().split('T')[0];

  var obj = {
    "sub": sub,
    "logs": logs,
    "notifications": notifications,
    "todayDate": todayDate,
    "msg": req.query.msg || ''
  };
  res.render('admin/dabba_customer.ejs', obj);
});

router.post('/save_dabba_log', checklogin, async function(req, res) {
  try {
    var d = req.body;
    var subId = d.subscription_id;
    var subRes = await exe(`SELECT * FROM dabba_subscriptions WHERE subscription_id = '${subId}'`);
    if (subRes.length === 0) return res.redirect('/admin/dabbas');
    var sub = subRes[0];

    var count = Math.max(1, parseInt(d.dabbas_count) || 1);
    var newConsumed = sub.consumed_dabbas + count;
    var newRemaining = Math.max(0, sub.total_dabbas - newConsumed);
    var logDate = d.log_date || new Date().toISOString().split('T')[0];
    var mealSlot = d.meal_slot || 'Both';
    var notes = (d.admin_notes || '').replace(/'/g, "''");

    await exe(`UPDATE dabba_subscriptions SET consumed_dabbas = '${newConsumed}', remaining_dabbas = '${newRemaining}' WHERE subscription_id = '${subId}'`);

    var logSql = `INSERT INTO dabba_daily_logs 
      (subscription_id, customer_name, customer_mobile, customer_email, log_date, meal_slot, dabbas_count, action_type, remaining_after, notification_sent, admin_notes)
      VALUES 
      ('${subId}', '${sub.customer_name.replace(/'/g, "''")}', '${sub.customer_mobile}', '${sub.customer_email || ''}', '${logDate}', '${mealSlot}', '${count}', 'Dabba Taken', '${newRemaining}', '${d.send_notification ? 1 : 0}', '${notes}')`;
    await exe(logSql);

    if (d.send_notification) {
      await notificationService.notifyDabbaUpdate({
        subscription_id: sub.subscription_id,
        customer_name: sub.customer_name,
        customer_mobile: sub.customer_mobile,
        customer_email: sub.customer_email,
        log_date: logDate,
        meal_slot: mealSlot,
        dabbas_count: count,
        action_type: 'Dabba Taken',
        remaining_dabbas: newRemaining,
        total_dabbas: sub.total_dabbas,
        branch_location: sub.branch_location,
        admin_notes: notes
      });
    }

    var successMsg = encodeURIComponent(`${logDate} रोजी ${count} डबे (${mealSlot}) यशस्वीरीत्या नोंदवले व ग्राहकाला सूचित केले.`);
    res.redirect(`/admin/dabba_customer/${subId}?msg=${successMsg}`);
  } catch (err) {
    console.error("save_dabba_log error:", err);
    res.redirect('/admin/dabbas');
  }
});

router.post('/quick_mark_dabba', checklogin, async function(req, res) {
  try {
    var d = req.body;
    var subId = d.subscription_id;
    var subRes = await exe(`SELECT * FROM dabba_subscriptions WHERE subscription_id = '${subId}'`);
    if (subRes.length === 0) return res.redirect('/admin/dabbas');
    var sub = subRes[0];

    var count = Math.max(1, parseInt(d.count) || 1);
    var mealSlot = d.meal_slot || 'Both';
    var newConsumed = sub.consumed_dabbas + count;
    var newRemaining = Math.max(0, sub.total_dabbas - newConsumed);
    var todayDate = new Date().toISOString().split('T')[0];

    await exe(`UPDATE dabba_subscriptions SET consumed_dabbas = '${newConsumed}', remaining_dabbas = '${newRemaining}' WHERE subscription_id = '${subId}'`);

    var logSql = `INSERT INTO dabba_daily_logs 
      (subscription_id, customer_name, customer_mobile, customer_email, log_date, meal_slot, dabbas_count, action_type, remaining_after, notification_sent, admin_notes)
      VALUES 
      ('${subId}', '${sub.customer_name.replace(/'/g, "''")}', '${sub.customer_mobile}', '${sub.customer_email || ''}', '${todayDate}', '${mealSlot}', '${count}', 'Dabba Taken', '${newRemaining}', 1, 'आजचा डबा (1-Click)')`;
    await exe(logSql);

    await notificationService.notifyDabbaUpdate({
      subscription_id: sub.subscription_id,
      customer_name: sub.customer_name,
      customer_mobile: sub.customer_mobile,
      customer_email: sub.customer_email,
      log_date: todayDate,
      meal_slot: mealSlot,
      dabbas_count: count,
      action_type: 'Dabba Taken',
      remaining_dabbas: newRemaining,
      total_dabbas: sub.total_dabbas,
      branch_location: sub.branch_location,
      admin_notes: 'आजचा डबा यशस्वीरीत्या नोंदवला.'
    });

    res.redirect('/admin/dabbas');
  } catch (err) {
    console.error("quick_mark_dabba error:", err);
    res.redirect('/admin/dabbas');
  }
});

router.post('/adjust_dabba_quota', checklogin, async function(req, res) {
  try {
    var d = req.body;
    var subId = d.subscription_id;
    var subRes = await exe(`SELECT * FROM dabba_subscriptions WHERE subscription_id = '${subId}'`);
    if (subRes.length === 0) return res.redirect('/admin/dabbas');
    var sub = subRes[0];

    var amount = Math.max(1, parseInt(d.amount) || 1);
    var reason = (d.reason || 'Admin Adjustment').replace(/'/g, "''");
    var todayDate = new Date().toISOString().split('T')[0];

    var newTotal = sub.total_dabbas;
    var newConsumed = sub.consumed_dabbas;
    var newRemaining = sub.remaining_dabbas;
    var actionType = 'Admin Adjustment';

    if (d.adjust_type === 'decrease_consumed') {
      // Customer skipped/cancelled dabba -> reduce consumed, restore remaining
      newConsumed = Math.max(0, sub.consumed_dabbas - amount);
      newRemaining = sub.total_dabbas - newConsumed;
      actionType = 'Admin Decreased';
    } else if (d.adjust_type === 'increase_consumed') {
      // Extra dabba taken -> increase consumed, reduce remaining
      newConsumed = sub.consumed_dabbas + amount;
      newRemaining = Math.max(0, sub.total_dabbas - newConsumed);
      actionType = 'Admin Added';
    } else if (d.adjust_type === 'add_total_quota') {
      // Extra quota granted -> increase total quota
      newTotal = sub.total_dabbas + amount;
      newRemaining = newTotal - sub.consumed_dabbas;
      actionType = 'Quota Extended';
    } else if (d.adjust_type === 'set_balance') {
      // Direct set remaining balance
      newRemaining = parseInt(d.amount) || 0;
      newConsumed = Math.max(0, sub.total_dabbas - newRemaining);
      actionType = 'Balance Reset';
    }

    await exe(`UPDATE dabba_subscriptions SET total_dabbas = '${newTotal}', consumed_dabbas = '${newConsumed}', remaining_dabbas = '${newRemaining}' WHERE subscription_id = '${subId}'`);

    var logSql = `INSERT INTO dabba_daily_logs 
      (subscription_id, customer_name, customer_mobile, customer_email, log_date, meal_slot, dabbas_count, action_type, remaining_after, notification_sent, admin_notes)
      VALUES 
      ('${subId}', '${sub.customer_name.replace(/'/g, "''")}', '${sub.customer_mobile}', '${sub.customer_email || ''}', '${todayDate}', 'Custom', '${amount}', '${actionType}', '${newRemaining}', '${d.send_alert ? 1 : 0}', '${reason}')`;
    await exe(logSql);

    if (d.send_alert) {
      await notificationService.notifyDabbaUpdate({
        subscription_id: sub.subscription_id,
        customer_name: sub.customer_name,
        customer_mobile: sub.customer_mobile,
        customer_email: sub.customer_email,
        log_date: todayDate,
        meal_slot: 'Adjustment',
        dabbas_count: amount,
        action_type: actionType,
        remaining_dabbas: newRemaining,
        total_dabbas: newTotal,
        branch_location: sub.branch_location,
        admin_notes: reason
      });
    }

    var successMsg = encodeURIComponent(`डब्यांमध्ये बदल यशस्वीरीत्या करण्यात आला (शिल्लक: ${newRemaining} डबे). ग्राहकाला सूचना पाठवली.`);
    if (d.redirect_to === 'customer') {
      res.redirect(`/admin/dabba_customer/${subId}?msg=${successMsg}`);
    } else {
      res.redirect('/admin/dabbas');
    }
  } catch (err) {
    console.error("adjust_dabba_quota error:", err);
    res.redirect('/admin/dabbas');
  }
});

router.get('/delete_dabba_log/:id', checklogin, async function(req, res) {
  try {
    var logId = req.params.id;
    var subId = req.query.subscription_id;

    var logRes = await exe(`SELECT * FROM dabba_daily_logs WHERE log_id = '${logId}'`);
    if (logRes.length > 0) {
      var log = logRes[0];
      var subRes = await exe(`SELECT * FROM dabba_subscriptions WHERE subscription_id = '${log.subscription_id}'`);
      if (subRes.length > 0) {
        var sub = subRes[0];
        // Reverse count if it was Dabba Taken or Admin Added
        var newConsumed = sub.consumed_dabbas;
        if (log.action_type === 'Dabba Taken' || log.action_type === 'Admin Added') {
          newConsumed = Math.max(0, sub.consumed_dabbas - log.dabbas_count);
        } else if (log.action_type === 'Admin Decreased') {
          newConsumed = sub.consumed_dabbas + log.dabbas_count;
        }
        var newRemaining = Math.max(0, sub.total_dabbas - newConsumed);

        await exe(`UPDATE dabba_subscriptions SET consumed_dabbas = '${newConsumed}', remaining_dabbas = '${newRemaining}' WHERE subscription_id = '${sub.subscription_id}'`);

        await notificationService.notifyDabbaUpdate({
          subscription_id: sub.subscription_id,
          customer_name: sub.customer_name,
          customer_mobile: sub.customer_mobile,
          customer_email: sub.customer_email,
          log_date: log.log_date,
          meal_slot: log.meal_slot,
          dabbas_count: log.dabbas_count,
          action_type: 'Admin Decreased',
          remaining_dabbas: newRemaining,
          total_dabbas: sub.total_dabbas,
          branch_location: sub.branch_location,
          admin_notes: `तारीख ${log.log_date} ची नोंद रद्द करण्यात आली आहे, डबे शिल्लक बॅलन्समध्ये परत जमा केले.`
        });
      }
      await exe(`DELETE FROM dabba_daily_logs WHERE log_id = '${logId}'`);
    }

    var successMsg = encodeURIComponent('नोंद यशस्वीरीत्या रद्द केली व शिल्लक डबे पूर्ववत केले.');
    res.redirect(`/admin/dabba_customer/${subId || ''}?msg=${successMsg}`);
  } catch (err) {
    console.error("delete_dabba_log error:", err);
    res.redirect('/admin/dabbas');
  }
});

router.post('/add_dabba_customer', checklogin, async function(req, res) {
  try {
    var d = req.body;
    var total = parseInt(d.total_dabbas) || 60;
    var price = parseInt(d.price) || 3500;
    var startDate = d.start_date || new Date().toISOString().split('T')[0];

    var sql = `INSERT INTO dabba_subscriptions 
      (customer_name, customer_mobile, customer_email, branch_location, plan_name, total_dabbas, consumed_dabbas, remaining_dabbas, daily_quota, price, start_date, delivery_type, delivery_address, status)
      VALUES 
      ('${(d.customer_name || '').replace(/'/g, "''")}', 
       '${(d.customer_mobile || '').replace(/'/g, "''")}', 
       '${(d.customer_email || '').replace(/'/g, "''")}', 
       '${(d.branch_location || '').replace(/'/g, "''")}', 
       '${(d.plan_name || '').replace(/'/g, "''")}', 
       '${total}', 
       0, 
       '${total}', 
       2, 
       '${price}', 
       '${startDate}', 
       '${(d.delivery_type || 'Doorstep Tiffin').replace(/'/g, "''")}', 
       '${(d.delivery_address || '').replace(/'/g, "''")}', 
       'Active')`;

    var result = await exe(sql);
    var newId = result.insertId;

    await notificationService.notifyDabbaUpdate({
      subscription_id: newId,
      customer_name: d.customer_name,
      customer_mobile: d.customer_mobile,
      customer_email: d.customer_email,
      log_date: startDate,
      meal_slot: 'All',
      dabbas_count: 0,
      action_type: 'Plan Started',
      remaining_dabbas: total,
      total_dabbas: total,
      branch_location: d.branch_location,
      admin_notes: `MessHub डबा सेवा सुरू झाली आहे. एकूण कोटा: ${total} डबे.`
    });

    var successMsg = encodeURIComponent(`नवीन ग्राहक ${d.customer_name} यशस्वीरीत्या सुरू केला!`);
    res.redirect(`/admin/dabba_customer/${newId}?msg=${successMsg}`);
  } catch (err) {
    console.error("add_dabba_customer error:", err);
    res.redirect('/admin/dabbas');
  }
});

router.post('/activate_booking_dabba', checklogin, async function(req, res) {
  try {
    var bookingId = req.body.booking_id;
    var bRes = await exe(`SELECT * FROM mess_bookings WHERE booking_id = '${bookingId}'`);
    if (bRes.length === 0) return res.redirect('/admin/bookings');
    var b = bRes[0];

    var total = 60;
    if (b.plan_name.includes('1 Time')) total = 30;
    else if (b.plan_name.includes('Weekly') || b.plan_name.includes('Trial')) total = 14;
    else if (b.plan_name.includes('Thali')) total = 1;

    var sql = `INSERT INTO dabba_subscriptions 
      (user_id, booking_id, customer_name, customer_mobile, customer_email, branch_location, plan_name, total_dabbas, consumed_dabbas, remaining_dabbas, daily_quota, price, start_date, delivery_type, delivery_address, status)
      VALUES 
      (${b.user_id ? `'${b.user_id}'` : 'NULL'}, 
       '${b.booking_id}', 
       '${b.customer_name.replace(/'/g, "''")}', 
       '${b.customer_mobile.replace(/'/g, "''")}', 
       '${(b.customer_email || '').replace(/'/g, "''")}', 
       '${b.branch_location.replace(/'/g, "''")}', 
       '${b.plan_name.replace(/'/g, "''")}', 
       '${total}', 
       0, 
       '${total}', 
       2, 
       '${b.price}', 
       '${b.start_date || new Date().toISOString().split('T')[0]}', 
       '${(b.delivery_type || 'Doorstep Tiffin').replace(/'/g, "''")}', 
       '${(b.delivery_address || '').replace(/'/g, "''")}', 
       'Active')`;

    var result = await exe(sql);
    await exe(`UPDATE mess_bookings SET booking_status = 'Confirmed' WHERE booking_id = '${bookingId}'`);

    var successMsg = encodeURIComponent(`बुकिंग वरून डबा सबस्क्रिप्शन सुरू केले!`);
    res.redirect(`/admin/dabba_customer/${result.insertId}?msg=${successMsg}`);
  } catch (err) {
    console.error("activate_booking_dabba error:", err);
    res.redirect('/admin/bookings');
  }
});

module.exports = router;