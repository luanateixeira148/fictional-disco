const express = require('express');
const router = express.Router();

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
