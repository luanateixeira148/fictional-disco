// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT         = process.env.PORT || 8080;
const ENV          = process.env.ENV || "development";
const express      = require("express");
const bodyParser   = require("body-parser");
const sass         = require("node-sass-middleware");
const app          = express();
const morgan       = require('morgan');
const cookieParser = require('cookie-parser')

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const itemsRoutes = require("./routes/items");
const adminRouter = require("./routes/admin");
const homeRouter = require("./routes/home");
const orderConfirmationRouter = require("./routes/order_confirmation");
const orderDetailsRoutes = require("./routes/order_details");
const waitingConfirmation = require("./routes/waiting_confirmation");

// Post routes
const addToCart = require("./routes/items");


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/menu", itemsRoutes(db));
app.use("/admin", adminRouter);
app.use("/home", homeRouter);
app.use("/order_confirmation", orderConfirmationRouter);
app.use("/order_details", orderDetailsRoutes(db));
app.use("/waiting_confirmation", waitingConfirmation);
app.use("/addToCart", addToCart);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
