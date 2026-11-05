-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: mace_project_db
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `about1`
--

DROP TABLE IF EXISTS `about1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `about1` (
  `about1_id` int(11) NOT NULL,
  `about1_heading` text DEFAULT NULL,
  `about1_description` text DEFAULT NULL,
  `about1_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about1`
--

LOCK TABLES `about1` WRITE;
/*!40000 ALTER TABLE `about1` DISABLE KEYS */;
INSERT INTO `about1` VALUES (1,'OUR STORY','Green Souls Kitchens proudly has a decade of experience in Food Industry with a Desire & Drive for excellence in rising slowly with massive Client-ale. We have a state of art Kitchen which caters to a wide range of customers.  We provide online tiffin service in different areas such as tiffin service in Kothrud, tiffin service in Aundh, tiffin service in Baner, tiffin service in Bavdhan, tiffin service in Karve Nagar, tiffin service in Warje, tiffin service in Balewadi, tiffin service in Deccan, tiffin service in Swargate, tiffin service in Senapati Bapat Road, tiffin service in Model Colony, tiffin service in Shivaji Nagar, tiffin service in Jangali Maharaj Road, tiffin service in Law College Road, tiffin service in Paud Road, tiffin service in All Peth Areas Etc.  Our ace Chef with a robust experience & best Culinary Qualification in providing meals to match the taste buds healthily without burning a hole in the pocket.  We Cater not only Homes & Offices but also variety of Occasions with our Multi-cuisines','1720867735825.png');
/*!40000 ALTER TABLE `about1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about2`
--

DROP TABLE IF EXISTS `about2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `about2` (
  `about2_id` int(11) NOT NULL,
  `about2_heading` text DEFAULT NULL,
  `about2_description` text DEFAULT NULL,
  `about2_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about2`
--

LOCK TABLES `about2` WRITE;
/*!40000 ALTER TABLE `about2` DISABLE KEYS */;
INSERT INTO `about2` VALUES (1,'Our Mission','Our Mission is to build a strong trustworthy foothold in delivering the Warmth & Care in form of Nutritious Food that will meet the needs of all over Valuable Customers & Potential Customers in region of our Delivery Network.','1720866573725.png');
/*!40000 ALTER TABLE `about2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `about3`
--

DROP TABLE IF EXISTS `about3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `about3` (
  `about3_id` int(11) NOT NULL,
  `about3_heading` text DEFAULT NULL,
  `about3_description` text DEFAULT NULL,
  `about3_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `about3`
--

LOCK TABLES `about3` WRITE;
/*!40000 ALTER TABLE `about3` DISABLE KEYS */;
INSERT INTO `about3` VALUES (1,'Our Vision','Our Vision is to not only be amongst the Topmost leading Home, Office and Industrial Catering Service Company but also the most Trusted oneâ€™s providing a Memorable Experience.','1720867388012.png');
/*!40000 ALTER TABLE `about3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aboutus_banner`
--

DROP TABLE IF EXISTS `aboutus_banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aboutus_banner` (
  `banner_id` int(11) NOT NULL,
  `aboutus_heading` text DEFAULT NULL,
  `aboutus_banner_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aboutus_banner`
--

LOCK TABLES `aboutus_banner` WRITE;
/*!40000 ALTER TABLE `aboutus_banner` DISABLE KEYS */;
INSERT INTO `aboutus_banner` VALUES (1,'About Us','1720865052178.png');
/*!40000 ALTER TABLE `aboutus_banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin_tbl`
--

DROP TABLE IF EXISTS `admin_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_tbl` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(200) DEFAULT NULL,
  `admin_mobile` varchar(200) DEFAULT NULL,
  `admin_email` varchar(300) DEFAULT NULL,
  `admin_password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_tbl`
--

LOCK TABLES `admin_tbl` WRITE;
/*!40000 ALTER TABLE `admin_tbl` DISABLE KEYS */;
INSERT INTO `admin_tbl` VALUES (1,'parmeshwar durgist','9657847967','durgistparmeshwar@gmail.com','1234'),(2,'admin','1234567890','admin@gmail.com','1234');
/*!40000 ALTER TABLE `admin_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banner`
--

DROP TABLE IF EXISTS `banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banner` (
  `banner_id` int(11) NOT NULL AUTO_INCREMENT,
  `banner_image` varchar(200) DEFAULT NULL,
  `banner_heading` varchar(200) DEFAULT NULL,
  `banner_description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`banner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banner`
--

LOCK TABLES `banner` WRITE;
/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (1,'1720446603335banner_1.jpg','Services we provide ....','Where food talks.Explore. Discuss. Enjoy....'),(2,'1720446682597banner_1.jpg','Blogs','Every dish has a story, share yours.'),(3,'1720446729471banner_1.jpg','Contact Us','Explore. Discuss. Enjoy...'),(4,'1720446774145banner_1.jpg','For Lunch','Taste the Difference, Mess-Free....'),(5,'1720446802569banner_1.jpg','About Us','The Tiffin is about that one time in millions when a box goes astray, changing lives forever.'),(6,'1720446729471banner_1.jpg','For Dinner','Taste the Difference, Mess-Free....');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_banner`
--

DROP TABLE IF EXISTS `blog_banner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_banner` (
  `banner_id` int(11) NOT NULL,
  `blog_heading` text DEFAULT NULL,
  `blog_banner_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_banner`
--

LOCK TABLES `blog_banner` WRITE;
/*!40000 ALTER TABLE `blog_banner` DISABLE KEYS */;
INSERT INTO `blog_banner` VALUES (1,'Our Blogs','1720277997853.png');
/*!40000 ALTER TABLE `blog_banner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blogs` (
  `blog_id` int(11) NOT NULL,
  `blog_title` text DEFAULT NULL,
  `blog_description` text DEFAULT NULL,
  `blog_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (3,'Tiffin services -a transforming industry','Home-cooked food is like Money,we never have a true idea of its value until we lose it','1720278636974.png'),(4,'Tiffin services -a transforming industry','Home-cooked food is like Money,we never have a true idea of its value until we lose it','1720278656591.png'),(5,'Tiffin services -a transforming industry','Home-cooked food is like Money,we never have a true idea of its value until we lose it','1720278665050.png');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_info`
--

DROP TABLE IF EXISTS `company_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_info` (
  `company_id` int(11) NOT NULL,
  `address1` text DEFAULT NULL,
  `address2` text DEFAULT NULL,
  `address3` text DEFAULT NULL,
  `contact` text DEFAULT NULL,
  `mess_name` text DEFAULT NULL,
  `mess_info` text DEFAULT NULL,
  `logo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_info`
--

LOCK TABLES `company_info` WRITE;
/*!40000 ALTER TABLE `company_info` DISABLE KEYS */;
INSERT INTO `company_info` VALUES (1,'Balikashram Road,','Ahmednagar.','Maharashtra - 414001','8263905159','MessHub','The Tiffin is about that one time in millions when a box goes astray, changing lives forever.','1720943215686.png'),(2,'Balikashram Road,','Ahmednagar.','Maharashtra - 414001','8263905159','MessHub','The Tiffin is about that one time in millions when a box goes astray, changing lives forever.','1720164427064.png');
/*!40000 ALTER TABLE `company_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conact_info`
--

DROP TABLE IF EXISTS `conact_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `conact_info` (
  `conact_info_id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_fname` text DEFAULT NULL,
  `contact_lname` text DEFAULT NULL,
  `conatct_email` text DEFAULT NULL,
  `contact_mobile` text DEFAULT NULL,
  `contact_message` text DEFAULT NULL,
  `contact_date` varchar(100) DEFAULT NULL,
  `contact_time` text DEFAULT NULL,
  PRIMARY KEY (`conact_info_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conact_info`
--

LOCK TABLES `conact_info` WRITE;
/*!40000 ALTER TABLE `conact_info` DISABLE KEYS */;
INSERT INTO `conact_info` VALUES (3,'Vinod','Thombare','vinodthombare752@gmail.com','07058105025','hii','05-07-2024','10:59:06'),(4,'Parmeshwar','Durgist','param@gmail.com','1234567890','Hii','05-07-2024','12:40:20'),(5,'Vinod','Thombare','vinodthombare752@gmail.com','07058105025','hii','05-07-2024','16:34:19'),(7,'Parmeshwar','Durgist','param@gmail.com','09657847967','any','08-07-2024','11:11:58'),(8,'Parmeshwar','Durgist','param1@gmail.com','09657847967','hellp\r\n','08-07-2024','16:40:11'),(9,'','','','','','15-07-2024','15:50:13'),(10,'','','','','','15-07-2024','15:52:11');
/*!40000 ALTER TABLE `conact_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conatct_address`
--

DROP TABLE IF EXISTS `conatct_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `conatct_address` (
  `conatct_address_id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(200) NOT NULL,
  `contact_address` text DEFAULT NULL,
  `pincode` text DEFAULT NULL,
  `contact_mobile` text DEFAULT NULL,
  PRIMARY KEY (`conatct_address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conatct_address`
--

LOCK TABLES `conatct_address` WRITE;
/*!40000 ALTER TABLE `conatct_address` DISABLE KEYS */;
INSERT INTO `conatct_address` VALUES (2,'My Desigion','Balikashram Road , Ahmednagar','414001','8263905159');
/*!40000 ALTER TABLE `conatct_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_start_page`
--

DROP TABLE IF EXISTS `contact_start_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact_start_page` (
  `contact_start_page_id` int(11) NOT NULL AUTO_INCREMENT,
  `background_image` text DEFAULT NULL,
  `image_heading` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`contact_start_page_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_start_page`
--

LOCK TABLES `contact_start_page` WRITE;
/*!40000 ALTER TABLE `contact_start_page` DISABLE KEYS */;
INSERT INTO `contact_start_page` VALUES (1,'1720242053228.png','Conctact Us');
/*!40000 ALTER TABLE `contact_start_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home1`
--

DROP TABLE IF EXISTS `home1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `home1` (
  `home1_id` int(11) NOT NULL,
  `home1_heading` text DEFAULT NULL,
  `home1_title` text DEFAULT NULL,
  `home1_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home1`
--

LOCK TABLES `home1` WRITE;
/*!40000 ALTER TABLE `home1` DISABLE KEYS */;
INSERT INTO `home1` VALUES (1,'OUR MEAL PLANS','Happy Meal','1720888366222.png'),(2,'','Happy Mini Meal','1720888550347.png'),(3,'','Happy Medium Meal','1720888570089.png'),(4,'','Nano meal','1720888595976.png');
/*!40000 ALTER TABLE `home1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home2_bg`
--

DROP TABLE IF EXISTS `home2_bg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `home2_bg` (
  `home2_id` int(11) NOT NULL,
  `home2_heading` text DEFAULT NULL,
  `home2_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home2_bg`
--

LOCK TABLES `home2_bg` WRITE;
/*!40000 ALTER TABLE `home2_bg` DISABLE KEYS */;
INSERT INTO `home2_bg` VALUES (1,'Our Customer Says','1720889941473.png');
/*!40000 ALTER TABLE `home2_bg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `location` (
  `location_id` int(11) NOT NULL AUTO_INCREMENT,
  `location_link` text DEFAULT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'https://maps.google.com/maps?q=Gangapur+Gaon,+Nashik,+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mess_blogs`
--

DROP TABLE IF EXISTS `mess_blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mess_blogs` (
  `user_id` int(11) DEFAULT NULL,
  `mess_blogs_id` int(11) NOT NULL,
  `mess_blog_images` varchar(200) DEFAULT NULL,
  `mess_blog_heading` varchar(200) DEFAULT NULL,
  `mess_blog_description` text DEFAULT NULL,
  PRIMARY KEY (`mess_blogs_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mess_blogs`
--

LOCK TABLES `mess_blogs` WRITE;
/*!40000 ALTER TABLE `mess_blogs` DISABLE KEYS */;
INSERT INTO `mess_blogs` VALUES (1,1,'1720672515781Blog1.jpg','Tiffin services -a transforming industry...','Home-cooked food is like Money,we never have a true idea of its value until we lose it'),(1,2,'1720672554819Blog2.jpg','Tiffin services -a transforming industry','Home-cooked food is like Money,we never have a true idea of its value until we lose it'),(1,3,'1720672587887blog3.jpg','THE TIFFIN HERO','Being a lone North Indian in a class full of Hyderabadi Telugus had its own advantages'),(2,4,'1720722513134Blog2.jpg','Tiffin services -a transforming industry','Being a lone North Indian in a class full of Hyderabadi Telugus had its own advantages');
/*!40000 ALTER TABLE `mess_blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mess_bookings`
--

DROP TABLE IF EXISTS `mess_bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mess_bookings` (
  `booking_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `customer_name` varchar(200) NOT NULL,
  `customer_mobile` varchar(50) NOT NULL,
  `customer_email` varchar(200) DEFAULT NULL,
  `branch_location` varchar(200) NOT NULL,
  `plan_name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `meal_type` varchar(50) NOT NULL,
  `tiffin_time` varchar(100) NOT NULL,
  `start_date` date NOT NULL,
  `delivery_type` varchar(100) NOT NULL,
  `delivery_address` mediumtext NOT NULL,
  `payment_mode` varchar(100) NOT NULL,
  `special_note` mediumtext DEFAULT NULL,
  `booking_status` varchar(50) DEFAULT 'Pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mess_bookings`
--

LOCK TABLES `mess_bookings` WRITE;
/*!40000 ALTER TABLE `mess_bookings` DISABLE KEYS */;
INSERT INTO `mess_bookings` VALUES (1,NULL,'Sanket Sahane','9876543210','sanket@example.com','Gangapur Gaon, Nashik','Regular One Month (2 Time Tiffin)',3500,'Pure Veg','दोन्ही वेळ (Lunch + Dinner)','2026-11-06','घरपोच / रूमवर डिलिव्हरी (Doorstep Tiffin)','Flat 204, Someshwar Heights, Gangapur Gaon, Nashik','रोख डिलिव्हरीच्या वेळी (Cash on Delivery)','कमी तिखट डबा पाठवावा.','Confirmed','2026-11-05 13:59:40'),(2,NULL,'Akole Customer','9822334455','akole@example.com','Pimpalgaon Nipani, Akole','Special Deluxe Thali',140,'Pure Veg','एक वेळ थाळी (Single Meal)','2026-11-06','मेसवर येऊन जेवणे (Mess Dine-in)','Pimpalgaon Nipani Main Road, Akole','UPI / QR Code ऑन डिलिव्हरी (GPay, PhonePe)','गरमागरम पुऱ्या हव्यात.','Pending','2026-11-05 13:59:52');
/*!40000 ALTER TABLE `mess_bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mess_dinner`
--

DROP TABLE IF EXISTS `mess_dinner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mess_dinner` (
  `user_id` int(11) DEFAULT NULL,
  `mess_dinner_id` int(11) NOT NULL,
  `user_admin_kyc_id` int(11) DEFAULT NULL,
  `mess_name` text DEFAULT NULL,
  `mess_images` text DEFAULT NULL,
  `mess_discription` text DEFAULT NULL,
  `mess_sunday_meal_name` text DEFAULT NULL,
  `mess_sunday_meal_img` text DEFAULT NULL,
  `mess_monday_meal_name` text DEFAULT NULL,
  `mess_monday_meal_img` text DEFAULT NULL,
  `mess_tuesday_meal_name` text DEFAULT NULL,
  `mess_tuesday_meal_img` text DEFAULT NULL,
  `mess_wednesday_meal_name` text DEFAULT NULL,
  `mess_wednesday_meal_img` text DEFAULT NULL,
  `mess_thursday_meal_name` text DEFAULT NULL,
  `mess_thursday_meal_img` text DEFAULT NULL,
  `mess_friday_meal_name` text DEFAULT NULL,
  `mess_friday_meal_img` text DEFAULT NULL,
  `mess_saturday_meal_name` text DEFAULT NULL,
  `mess_saturday_meal_img` text DEFAULT NULL,
  PRIMARY KEY (`mess_dinner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mess_dinner`
--

LOCK TABLES `mess_dinner` WRITE;
/*!40000 ALTER TABLE `mess_dinner` DISABLE KEYS */;
INSERT INTO `mess_dinner` VALUES (15,0,9,'Annapurna','1721112008947service3.jpeg','For dinner','Veg','1721112008948service1.jpeg','Non veg','1721112008948service2.jpeg','Jain ','1721112008948service3.jpeg','Veg','1721112008948service4.jpeg','Paneer Thali','1721112008948service5.webp','Chicken Thali','1721112008948service6.webp','Veg','1721112008948service1.jpeg'),(1,1,1,'Param Mess','1720935894528_menu_mess_img.jpg','Tiffin/Dabbawala Services Pune Group helps you find trusted home cooks with food options as per your choice of cuisine diet, taste & budget.When used in place of the word \"lunch\", tiffin often consists of rice, lentils, curry, vegetables, chapatis or \"spicy meats\".[9] In addition, the lunch boxes are themselves called tiffin carriers, tiffin-boxes or just tiffins.','Non-vage__','1720931118923service3.jpeg','Khir','1720931118923service4.jpeg','Panir','1720931118923service5.webp','harbhara','1720931118923blog3.jpg','mataki','1720931118923Blog1.jpg','batat','1720931118923service6.webp','sweets','1720931118924service7.jpg');
/*!40000 ALTER TABLE `mess_dinner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mess_locations`
--

DROP TABLE IF EXISTS `mess_locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mess_locations` (
  `location_id` int(11) NOT NULL AUTO_INCREMENT,
  `location_name` varchar(200) NOT NULL,
  `area_name` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  `pincode` varchar(20) DEFAULT NULL,
  `contact_mobile` varchar(100) DEFAULT NULL,
  `contact_email` varchar(100) DEFAULT NULL,
  `map_embed_url` mediumtext NOT NULL,
  `description` mediumtext DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT 1,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mess_locations`
--

LOCK TABLES `mess_locations` WRITE;
/*!40000 ALTER TABLE `mess_locations` DISABLE KEYS */;
INSERT INTO `mess_locations` VALUES (1,'Gangapur Gaon, Nashik','Gangapur Gaon, Near Someshwar Waterfalls Road, Gangapur Road','Nashik','422013','+91 8263905159','messhub.nashik@gmail.com','https://maps.google.com/maps?q=Gangapur+Gaon,+Nashik,+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed','??????? ??? ? ??????? ??? ????????? ???? ??????????, ?????????? ??? ????????????? ??? ? ???????? ????? ?????????.',1),(2,'Pimpalgaon Nipani, Akole','Main Road, Pimpalgaon Nipani, Taluka Akole, Dist. Ahilyanagar','Akole','422601','+91 8263905159','messhub.akole@gmail.com','https://maps.google.com/maps?q=Pimpalgaon+Nipani,+Akole,+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed','???????? ?????? ? ????? ????????? ???????????? ????? ?????? ????? ???????? ???? ? ??? ????.',1);
/*!40000 ALTER TABLE `mess_locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mess_lunch`
--

DROP TABLE IF EXISTS `mess_lunch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mess_lunch` (
  `user_id` int(11) DEFAULT NULL,
  `mess_lunch_id` int(11) NOT NULL,
  `user_admin_kyc_id` int(11) DEFAULT NULL,
  `mess_name` text DEFAULT NULL,
  `mess_images` text DEFAULT NULL,
  `mess_discription` text DEFAULT NULL,
  `mess_sunday_meal_name` text DEFAULT NULL,
  `mess_sunday_meal_img` text DEFAULT NULL,
  `mess_monday_meal_name` text DEFAULT NULL,
  `mess_monday_meal_img` text DEFAULT NULL,
  `mess_tuesday_meal_name` text DEFAULT NULL,
  `mess_tuesday_meal_img` text DEFAULT NULL,
  `mess_wednesday_meal_name` text DEFAULT NULL,
  `mess_wednesday_meal_img` text DEFAULT NULL,
  `mess_thursday_meal_name` text DEFAULT NULL,
  `mess_thursday_meal_img` text DEFAULT NULL,
  `mess_friday_meal_name` text DEFAULT NULL,
  `mess_friday_meal_img` text DEFAULT NULL,
  `mess_saturday_meal_name` text DEFAULT NULL,
  `mess_saturday_meal_img` text DEFAULT NULL,
  PRIMARY KEY (`mess_lunch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mess_lunch`
--

LOCK TABLES `mess_lunch` WRITE;
/*!40000 ALTER TABLE `mess_lunch` DISABLE KEYS */;
INSERT INTO `mess_lunch` VALUES (1,2,1,'Parmeshwar Mess','1720833685597_menu_mess_img.jpg','Tiffin/Dabbawala Services Pune Group helps you find trusted home cooks with food options as per your choice of cuisine diet, taste & budget.When used in place of the word lunch, tiffin often consists of rice, lentils, curry, vegetables, chapatis or spicy meats.9 In addition, the lunch boxes are themselves called tiffin carriers, tiffin-boxes or just tiffins.','Non-veg ','1720833763804_service1.jpeg','Khir','1720833555185_service3.jpeg','Panir','1720833763804_service3.jpeg','potatos','1720833763804_service4.jpeg','mataki','1720833763805_blog3.jpg','batat','1720833763805_service5.webp','sweets','1720851185897_service3.jpeg'),(2,10,2,'Hostel Mess','1720848182721service7.jpg','Tiffin/Dabbawala Services Pune Group helps you find trusted home cooks with food options as per your choice of cuisine diet, taste & budget.When used in place of the word \"lunch\", tiffin often consists of rice, lentils, curry, vegetables, chapatis or \"spicy meats\".[9] In addition, the lunch boxes are themselves called tiffin carriers, tiffin-boxes or just tiffins.','Veg','1720848182722menu_mess_img.jpg','shevga','1720848182722Blog1.jpg','Dal Rice','1720848182722service1.jpeg','harbhara','1720848182722blog3.jpg','mataki','1720848182722service6.webp','batat','1720848182722service2.jpeg','Panir','1720848182722service4.jpeg');
/*!40000 ALTER TABLE `mess_lunch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mess_plans`
--

DROP TABLE IF EXISTS `mess_plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mess_plans` (
  `plan_id` int(11) NOT NULL AUTO_INCREMENT,
  `plan_name` varchar(255) NOT NULL,
  `plan_type` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `original_price` int(11) NOT NULL,
  `duration` varchar(100) NOT NULL,
  `meals_per_day` varchar(100) NOT NULL,
  `description` mediumtext DEFAULT NULL,
  `features` mediumtext DEFAULT NULL,
  `badge` varchar(50) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT 1,
  PRIMARY KEY (`plan_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mess_plans`
--

LOCK TABLES `mess_plans` WRITE;
/*!40000 ALTER TABLE `mess_plans` DISABLE KEYS */;
INSERT INTO `mess_plans` VALUES (1,'Regular One Month (2 Time Tiffin)','Monthly 2 Times',3500,4200,'1 Month (30 Days)','2 Times Daily (Lunch & Dinner)','??? ?????? ??? (????? ??? ?????) ??????? ??? ?????? ?????? ??????? ?????.','4 ?????/?????, 2 ?????? ?????? (1 ????? + 1 ????), ???/???, ?????????/???? ???, ????????, ?????/????;?????? ??? ?????? ?????? ??? ???? ?????? ?????????;?????? ?????? ??? ???? ????????;100% ????? ??? ???????? ??????','Most Popular',1),(2,'Regular One Month (1 Time Tiffin)','Monthly 1 Time',2000,2400,'1 Month (30 Days)','1 Time Daily (Lunch ????? Dinner)','????, ????? ????? ??????? ??? ?? ????? ???????? ??? ??????? ?????.','4 ?????, 2 ??????, ???/???, ???, ????;??????? ????? ???????? ???? ??????? ?????????;????? ???????? ?????? ??? ???;??? ??? ??? ?????? ?????','Best Value',1),(3,'Special Deluxe Thali','Special Thali',140,180,'1 Special Meal','Single Deluxe Meal','???? ??? ????? ????! ?????? ????/???? ???, ??? ?????? ??? ??????? ??????/???????.','1 ?????? ???? ????, 1 ???? ????;4 ??? ??????? ????? 5 ??????? ??????;???????? ????? ?????? ????/???;??? ???? ????? ???????;???? ????, ?????/???, ???? ??? ????','Today Special',1),(4,'Weekly Trial Pack (7 Days - 2 Times)','Weekly Trial',950,1150,'7 Days (1 ?????)','2 Times Daily (Lunch & Dinner)','????? ???? ??? ?? ?????? ??????????? 1 ????????? ?????? ?????? ?????.','7 ???? ??? ?????? ????? ????;??????? ???? ???????? ????????? ????;??????? ????-???? ???? ????;???? ????????? ????????','Trial Offer',1);
/*!40000 ALTER TABLE `mess_plans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mess_service`
--

DROP TABLE IF EXISTS `mess_service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mess_service` (
  `user_id` int(11) DEFAULT NULL,
  `mess_service_id` int(11) NOT NULL AUTO_INCREMENT,
  `service_heading` varchar(200) DEFAULT NULL,
  `service_title` varchar(200) DEFAULT NULL,
  `service_mess_image` varchar(200) DEFAULT NULL,
  `service_mess_title` varchar(200) DEFAULT NULL,
  `service_mess_description` varchar(200) DEFAULT NULL,
  `user_admin_kyc_id` int(11) NOT NULL,
  PRIMARY KEY (`mess_service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mess_service`
--

LOCK TABLES `mess_service` WRITE;
/*!40000 ALTER TABLE `mess_service` DISABLE KEYS */;
INSERT INTO `mess_service` VALUES (1,2,'PARMESHWAR MESS SERVICES','We have an exceptional range of services to help you.','1720459582853service1.jpeg','Lunch Tiffin service','Allow us to take care of your daily Lunch, regardless if yours at work or at home',1),(1,3,'','','1720459883654service2.jpeg','Nutri-meal Lunch','What would you choose?stale cooked hostel food or goodness and wholeness of nutritions food?',1),(1,4,'','','1720459917921service3.jpeg','Customised Tiffin','Yes,you can virtually design your own meals and choose from plenty of options provided buy us.',1),(1,5,'','','1720459940135service4.jpeg','Corporate Catering','We make sure you bond well with your fellow colleagues over tastey and satiating food dishes.',1),(1,6,'','','1720459973002service5.webp','Corporate Catering','We make sure you bond well with your fellow colleagues over tastey and satiating food dishes.',1),(1,7,'','','1720459999190service6.webp','Corporate Catering','We make sure you bond well with your fellow colleagues over tastey and satiating food dishes.',1),(2,8,'VINOD MESS SERVICES','We have an exceptional range of services to help you.','1720465489915service1.jpeg','Lunch Tiffin service','Allow us to take care of your daily Lunch, regardless if yours at work or at home',2),(2,9,'','','1720506183888service2.jpeg','Nutri-meal Lunch','What would you choose?stale cooked hostel food or goodness and wholeness of nutritions food?',2),(2,10,'','','1720506723067service3.jpeg','Customised Tiffin','Yes,you can virtually design your own meals and choose from plenty of options provided buy us.',2),(1,12,'undefined','undefined','1720945980411service1.jpeg','Corporate Catering','Allow us to take care of your daily Lunch, regardless if yours at work or at home',1);
/*!40000 ALTER TABLE `mess_service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mess_service1`
--

DROP TABLE IF EXISTS `mess_service1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mess_service1` (
  `mess_service1_id` int(11) NOT NULL AUTO_INCREMENT,
  `mess_service1_img` varchar(200) DEFAULT NULL,
  `mess_service1_heading` varchar(200) DEFAULT NULL,
  `mess_service1_decription1` varchar(200) DEFAULT NULL,
  `mess_service1_decription2` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`mess_service1_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mess_service1`
--

LOCK TABLES `mess_service1` WRITE;
/*!40000 ALTER TABLE `mess_service1` DISABLE KEYS */;
INSERT INTO `mess_service1` VALUES (1,'1720545473521service7.jpg','Food like home, Away from home','Green Souls Kitchens has been serving 100% Fresh and Authentic Indian Food for over a decade in the city of Pune Unlike other tiffin and catering services we  give you multiple options to choose your ','If you have subscribed for daily tiffin services from Green Souls Kitchens and wish to cancel your lunch, all you have to do is inform a day prior, before 10 pm and the dinner cancellation would be be'),(2,'1720545789638service8.jpg','Foodie Finds, Home Delivered.....','Avoid the tasteless and unhealthy food served at your offices, work places or the outside food if youâ€™re living far from your homes. Rather, order your meals from Green Souls Kitchens Just sitting f','If you have subscribed for daily tiffin services from Green Souls Kitchens and wish to cancel your lunch, all you have to do is inform a day prior, before 10 pm and the dinner cancellation would be be');
/*!40000 ALTER TABLE `mess_service1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL AUTO_INCREMENT,
  `reviewer_name` text DEFAULT NULL,
  `review_desc` text DEFAULT NULL,
  `reviewer_img` text DEFAULT NULL,
  PRIMARY KEY (`review_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'Sakshi','Food great,The communication is great and they are quick toresolve any potential issues.they really do theirbest to keep the Customer happy.','1720946316071.png'),(2,'Vinod','The best choice I\'ve ever model green soul kitchens saves meso much time and money. It\'s so tasty that I would say itsbetter than eat in a restaurant and more healthy.','1720946322273.png'),(3,'Rohini','Food great, The communication is great and they are quick toresolve any potential issues. They really do theirbest to keep the Customer happy.','1720946344864.png'),(4,'Parmeshwar','The best choice I\'ve ever model green soul kitchens saves me so much time and money. It\'s so tasty that I would say its better than eat in a restaurant and more healthy.','1720949425874.png'),(6,'Kanchan','The best choice I\'ve ever model green soul kitchens saves me so much time and money. It\'s so tasty that I would say its better than eat in a restaurant and more healthy.','1720946295281.png');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slider`
--

DROP TABLE IF EXISTS `slider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slider` (
  `slider_id` int(11) NOT NULL,
  `slider_title` text DEFAULT NULL,
  `slider_subtitle` text DEFAULT NULL,
  `slider_info` text DEFAULT NULL,
  `slider_image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slider`
--

LOCK TABLES `slider` WRITE;
/*!40000 ALTER TABLE `slider` DISABLE KEYS */;
INSERT INTO `slider` VALUES (1,'Eat healthylive better','Swad Bhara Khana Rozana','You can get the best homemade foodfrom Green Souls Kitchens.The foodwill be full of soul,health,& taste.','1720888040871.png');
/*!40000 ALTER TABLE `slider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_admin_kyc`
--

DROP TABLE IF EXISTS `user_admin_kyc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_admin_kyc` (
  `user_id` int(11) DEFAULT NULL,
  `user_admin_kyc_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_admin_fname` varchar(200) DEFAULT NULL,
  `user_admin_lname` varchar(200) DEFAULT NULL,
  `user_admin_email` varchar(200) DEFAULT NULL,
  `user_admin_phone` varchar(200) DEFAULT NULL,
  `user_admin_photo` varchar(200) DEFAULT NULL,
  `user_admin_address` text DEFAULT NULL,
  `user_admin_mess_name` varchar(200) DEFAULT NULL,
  `user_admin_mess_photo` varchar(200) DEFAULT NULL,
  `user_admin_mess_area` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`user_admin_kyc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_admin_kyc`
--

LOCK TABLES `user_admin_kyc` WRITE;
/*!40000 ALTER TABLE `user_admin_kyc` DISABLE KEYS */;
INSERT INTO `user_admin_kyc` VALUES (11,6,'Sandesh','Kshetre','sandesh@gmail.co','1234567890','1719983642714(4304) Lecture 8 _ Events in JavaScript _ JavaScript Full Course - YouTube - Google Chrome 6_25_2024 12_22_19 PM.png','','e4e2','1719983642714(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_08_54 PM.png','Savidi Area');
/*!40000 ALTER TABLE `user_admin_kyc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_admin_kyc_complated`
--

DROP TABLE IF EXISTS `user_admin_kyc_complated`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_admin_kyc_complated` (
  `user_id` int(11) DEFAULT NULL,
  `user_admin_kyc_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_admin_fname` varchar(200) DEFAULT NULL,
  `user_admin_lname` varchar(200) DEFAULT NULL,
  `user_admin_email` varchar(200) DEFAULT NULL,
  `user_admin_phone` varchar(200) DEFAULT NULL,
  `user_admin_photo` varchar(200) DEFAULT NULL,
  `user_admin_address` text DEFAULT NULL,
  `user_admin_mess_name` varchar(200) DEFAULT NULL,
  `user_admin_mess_photo` varchar(200) DEFAULT NULL,
  `user_admin_mess_area` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`user_admin_kyc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_admin_kyc_complated`
--

LOCK TABLES `user_admin_kyc_complated` WRITE;
/*!40000 ALTER TABLE `user_admin_kyc_complated` DISABLE KEYS */;
INSERT INTO `user_admin_kyc_complated` VALUES (1,1,'Parmeshwar','Durgist','durgistparmeshwar@gmail.com','9657847967','1720077793470IMG_20230131_094508.jpg','chanda Ta.newasa Julia A.nagar','param mess','172007779347020220328_115352.jpg','Balika Ashram Road Area'),(2,2,'vinod ','thombare','abcd@gmail.com','8745877458','1719982031839Thank You - Sourcedesk Global - Google Chrome 7_2_2024 5_11_06 PM.png','Kautha Ta.newasa Julia A.nagar','Hostel boyz mace am','1719982031839(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_28_12 PM.png','Balika Ashram Road Area'),(10,4,'mahesh','bhingare','mahesh@gmail.com','9356569310','1719983431486Online Test Window - Google Chrome 6_23_2024 12_21_08 PM.png','Kautha Ta.newasa Julia A.nagar','Hostel boyz mace ','1719983431486(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_08_54 PM.png','Savidi Area'),(13,8,'rutuja  ','walke','rutu@gmail.com','872387723','1720094178355(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_27_00 PM.png','ahmednagar ','rutuja mess','1720094178355(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_30_59 PM.png','Balika Ashram Road Area'),(15,9,'Rohini','Khade','rohini@gmail.com','1234567891','1720154721291(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_08_54 PM.png','punekar','rohini mess','1720154721291(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 4_03_26 PM.png','Balika Ashram Road Area'),(16,10,'pavan','sawant','pavan@gmail.com','929838273','1720504293379service1.jpeg','ahmednagar ','A2Z MESS','1720504293379service2.jpeg','Balika Ashram Road Area');
/*!40000 ALTER TABLE `user_admin_kyc_complated` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_admin_mess_details`
--

DROP TABLE IF EXISTS `user_admin_mess_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_admin_mess_details` (
  `user_id` int(11) DEFAULT NULL,
  `user_admin_mess_details_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_admin_mess_name` varchar(299) DEFAULT NULL,
  `user_admin_mess_info` text DEFAULT NULL,
  `user_admin_mess_area` varchar(299) DEFAULT NULL,
  `user_admin_mess_photo` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`user_admin_mess_details_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_admin_mess_details`
--

LOCK TABLES `user_admin_mess_details` WRITE;
/*!40000 ALTER TABLE `user_admin_mess_details` DISABLE KEYS */;
INSERT INTO `user_admin_mess_details` VALUES (1,2,'Hostel boyz mace 1','abc 1','Balika Ashram Road Area','1720190291800(1) Top job picks for you _ LinkedIn - Google Chrome 7_1_2024 4_49_48 PM.png'),(2,3,'am hostel mace','xyz','Paip Line Road Area','1720176058971(4469) Top JavaScript Interview Questions And Answers _ JavaScript Interview Preparation _ Simplilearn - YouTube - Google Chrome 6_28_2024 3_28_11 PM.png'),(0,4,'Hostel boyz mace ','abc','',NULL),(16,5,'A2Z MESS','abc','Balika Ashram Road Area','1720520946964Java Currency Formatter _ HackerRank - Google Chrome 1_1_2024 11_16_11 AM.png');
/*!40000 ALTER TABLE `user_admin_mess_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tbl`
--

DROP TABLE IF EXISTS `user_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_tbl` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(200) DEFAULT NULL,
  `mobile_number` varchar(200) DEFAULT NULL,
  `user_email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tbl`
--

LOCK TABLES `user_tbl` WRITE;
/*!40000 ALTER TABLE `user_tbl` DISABLE KEYS */;
INSERT INTO `user_tbl` VALUES (1,'parmeshwar durgist','9657847967','durgistparmeshwar@gmail.com','123456'),(2,'Vinod ','7058105025','abcd@gmail.com','123'),(10,'mahesh','9356569310','mahesh@gmail.com','123'),(11,'sandesh','1234567890','sandesh@gmail.com','123'),(12,'prasadh durgist','0987654321','durgistprasadh@gmail.com','123'),(13,'rutuja walke ','872387723','rutu@gmail.com','123'),(14,'xyz','1111111111','xyz@gmail.com','123456'),(15,'rohini khade ','1234567891','rohini@gmail.com','1234'),(16,'pavan sawant','929838273','pavan@gmail.com','1234'),(17,'sanket sahane','8263905159','sanketsahane56@gmail.com','8263');
/*!40000 ALTER TABLE `user_tbl` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-11-05 20:01:44
