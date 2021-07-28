const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = function (db) {

  // GET /menu
  /* Render the menu page */
  router.get('/', (req, res) => {
    console.log("connected to database!");
    const sql = `SELECT * FROM items`;
    db.query(sql)
      .then((data) => {
        console.log("data.rows: ", data.rows);
        const templateVars = { menuItems: data.rows };
        res.render('menu', templateVars);
      })
  });
  return router;
};
