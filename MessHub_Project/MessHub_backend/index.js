var express = require('express');
var path = require('path');
var user_routes = require('./routes/user_routes');
var admin_routes = require('./routes/admin_routes');
var user_admin_routes = require('./routes/user_admin_routes');
var session = require('express-session');
var bodyparser = require('body-parser');
var upload = require('express-fileupload');
var cors = require("cors");
var exe = require('./conn');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(session({
    secret: "MessHub_Sanket_Sahane_2026",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 Days Persistent Login
    }
}));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(upload());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyparser.json());

app.use("/", user_routes);
app.use("/admin", admin_routes);
app.use("/userAdmin", user_admin_routes);

var PORT = process.env.PORT || 1000;
app.listen(PORT, function() {
    console.log("MessHub Server is running on http://localhost:" + PORT);
});
