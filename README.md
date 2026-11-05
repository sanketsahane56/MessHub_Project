# 🍱 MessHub - Online Mess & Monthly Tiffin Booking Platform

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.19-lightgrey.svg)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-MariaDB-blue.svg)](https://www.mysql.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple.svg)](https://getbootstrap.com/)
[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-orange.svg)](https://sanketsahane56.github.io/MessHub_Project/)

> **MessHub** is a full-stack web application designed for Mess Owners and Students/Working Professionals to manage daily meals, monthly tiffin subscriptions, branch locations with interactive Google Maps, and online order bookings.

🌐 **Live Demo Webpage:** [https://sanketsahane56.github.io/MessHub_Project/]  
👤 **Developer:** [Sanket Vijay Sahane](https://github.com/sanketsahane56)  
📞 **Contact & WhatsApp:** [+91 8263905159](https://wa.me/ 8263905159)

---

## 🌟 Key Features

1. **Online Mess & Tiffin Booking System:**
   - Customers can browse and book daily meals or monthly tiffin subscriptions directly online.
   - Generates instant Booking ID (`#MH-XXXX`) and detailed printable receipts.
   - Real-time customer tracking page (`/my-bookings`) by registered mobile number.
   - Flexible payment options: Cash on Delivery (COD) & UPI QR Code on Delivery.

2. **Dabba Tracking & Attendance System (डबा हजेरी व रेकॉर्ड व्यवस्थापन):**
   - **Customer Ledger / Table View:** Detailed record for each customer (e.g. Onkar's table showing plan, start date, quota, and history).
   - **Daily Attendance Marking:** 1-Click mark for Lunch (+1), Dinner (+1), or Both (+2) on any date (e.g. 5th date: 2 dabbas).
   - **Admin Quota Adjustment (कमी / जास्त करा):** Admin can flexibly increase dabbas, decrease dabbas (refund/cancel on absence), or add bonus quota.
   - **Automated Alerts (Email, In-App & WhatsApp):** Customers receive instant HTML email notifications via Nodemailer and in-app alerts whenever dabbas are taken or adjusted.
   - **Customer Dabba Passbook (`/my-dabbas`):** Customers can check their live remaining quota, date-wise consumption ledger, and mess alerts online anytime.

3. **Interactive Branch Locations & Google Maps:**
   - **📍 Gangapur Gaon Branch (Nashik):** Gangapur Gaon, Near Someshwar Waterfalls Road, Gangapur Road, Nashik - 422013.
   - **📍 Pimpalgaon Nipani Branch (Akole):** Main Road, Pimpalgaon Nipani, Taluka Akole, Dist. Ahilyanagar - 422601.
   - Interactive 1-click tab switcher allowing visitors to view the exact Google Map and contact info for each branch.

4. **Direct WhatsApp & Phone Integration:**
   - 1-Click WhatsApp chat widget connected directly to **8263905159**.
   - Direct call buttons on header, booking page, and contact sections.

5. **Robust Admin & Vendor Dashboards:**
   - **Admin Panel (`/admin`):**
     * Manage all online customer bookings (Approve, Confirm, Complete, or Cancel).
     * Dabba Management & Attendance (`/admin/dabbas`) with real-time counters and individual customer ledger (`/admin/dabba_customer/:id`).
     * Real-time metrics: Total Bookings, Active Dabba Subscriptions, Today's Served Dabbas, Revenue in Rupees (₹).
     * Filter orders by branch (Nashik / Akole) or booking status.
     * KYC verification for mess vendors.
   - **UserAdmin / Vendor Dashboard (`/userAdmin`):**
     * Manage lunch and dinner daily menus.
     * Upload photos, update mess details, and view customer orders.

---

## 🍽️ Mess Plans & Subscription Offers (with Rupee Pricing)

| Plan Name | Duration | Price (INR) | Inclusions |
|---|---|---|---|
| **Regular 1 Month (2 Times)** <br> *(Most Popular)* | 30 Days (Lunch + Dinner) | **₹3,500** <br> <small>~~₹4,200~~ (₹700 Off)</small> | 4 Rotis, 2 Sabzi (1 Gravy + 1 Dry), Dal, Rice, Salad, Papad/Pickle, Sunday Special Sweet, Free Delivery |
| **Regular 1 Month (1 Time)** <br> *(Best Value)* | 30 Days (Lunch OR Dinner) | **₹2,000** <br> <small>~~₹2,400~~ (₹400 Off)</small> | 4 Rotis, 2 Sabzi, Dal, Rice, Salad, Timely delivery for College/Office |
| **Special Deluxe Thali** <br> *(Hot Special)* | Single Deluxe Meal | **₹140** <br> <small>~~₹180~~</small> | Special Paneer dish, 1 Dry Sabzi, 4 Butter Rotis / 5 Puris, Gulab Jamun/Sweet, Dal Tadka, Jeera Rice, Raita & Papad |
| **Weekly Trial Pack** <br> *(7 Days Trial)* | 7 Days (Lunch + Dinner) | **₹950** <br> <small>~~₹1,150~~</small> | 7 Days full trial pack (both times) with complete menu variety |

---

## 🛠️ Technology Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL / MariaDB (Connection Pooling with `mysql` / `mysql2`, `utf8mb4` charset)
- **Frontend / Template Engine:** EJS (Embedded JavaScript), HTML5, CSS3, JavaScript
- **Styling & UI:** Bootstrap 5, FontAwesome Icons, Waves.js, CoreUI Admin Dashboard
- **Hosting / Deployment:** GitHub Pages (Live Showcase) & Localhost / Cloud Node Hosting

---

## 🚀 Getting Started & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [XAMPP](https://www.apachefriends.org/) (for MySQL / MariaDB)

### 1. Clone the Repository
```bash
git clone https://github.com/sanketsahane56/MessHub-Project.git
cd MessHub-Project
```

### 2. Database Setup
1. Open XAMPP Control Panel and start **MySQL** (or use the custom MariaDB script).
2. Open phpMyAdmin or MySQL CLI:
   ```sql
   CREATE DATABASE mace_project_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```
3. Import the database dump provided in the project:
   ```bash
   mysql -u root -p mace_project_db < MessHub_Project/mace_project_db.sql
   ```

### 3. Install Dependencies
```bash
cd MessHub_Project/MessHub_backend
npm install
```

### 4. Run the Application
You can use the 1-click launcher or standard npm start:

**Method A: 1-Click Batch File (Windows)**
Double click [`start_messhub.bat`](start_messhub.bat) in the project folder. It will automatically:
- Start MariaDB on port 3307
- Start the Node.js server
- Open your browser at `http://localhost:1000`

**Method B: Command Line**
```bash
node index.js
```

Open your browser at: **`http://localhost:1000`**

---

## 🔑 Default Credentials

| Portal | URL | Username / Mobile | Password |
|---|---|---|---|
| **Admin Panel** | `http://localhost:1000/admin/login` | `sanketsahane56@gmail.com` | `sanket9021` |
| **User / Vendor** | `http://localhost:1000/login` | `8263905159` / `sanketsahane56@gmail.com` | `sanket9021` |

---

## 📂 Project Structure

```
MessHub_Project/
├── docs/                           # Live GitHub Pages interactive showcase
│   └── index.html
├── MessHub_backend/                # Full-stack Express application
│   ├── public/                     # Static CSS, JS, Images, Uploads
│   ├── routes/                     # Express routes (user, admin, userAdmin)
│   ├── views/                      # EJS templates (user, admin, userAdmin)
│   ├── conn.js                     # MySQL connection pool configuration
│   ├── index.js                    # Express application entry point
│   └── package.json
├── mace_project_db.sql             # Complete database schema & seeded data
├── mariadb_custom.ini              # Custom MariaDB configuration
├── start_messhub.bat               # 1-Click project launcher
├── stop_messhub.bat                # 1-Click service stopper
├── .gitignore
└── README.md
```

---

## 📞 Support & Inquiries

For inquiries, customizations, or support:
- **WhatsApp:** [+91 8263905159](https://wa.me/918263905159)
- **Call:** +91 8263905159
- **GitHub:** [@sanketsahane56](https://github.com/sanketsahane56)

---
*Created with ❤️ by Sanket Vijay Sahane*
