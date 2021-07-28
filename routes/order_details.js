const express = require('express');
const router = express.Router();

module.exports = function (db) {

  // GET /order_details
  router.get('/', (req, res) => {
    console.log("connected to database!");
    const sql = `SELECT * FROM order_items`;
    db.query(sql)
    .then((data) => {
      console.log("data.rows: ", data.rows);
      const templateVars = { orderItems: data.rows };
      /* Render the menu page */
      res.render('order_details', templateVars);
      })

  });
  return router;
};
