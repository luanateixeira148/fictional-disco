const express = require('express');
const router = express.Router();

module.exports = function(db) {
  // POST /order_details
  // router.post('/', (req, res) => {
  //   console.log("posting order_details to database");
  //   const sql = `INSERT INTO order_items ($1, $2);`
  //   const values = [req.params.item_id, req.params.quantity];
  //   db.query(sql, values)
  //     .then((data) => {
  //       console.log("data.rows: ", data.rows);
  //       const templateVars = { menuItems: data.rows };
  //       /* Render the menu page with all menu items*/
  //       res.render('order_details', templateVars);
  //     })
  // });

  // GET /order_details
  router.get('/', (req, res) => {
    console.log("getting order_items from database!");
    const sql = `SELECT * FROM order_items`;
    db.query(sql)
    .then((data) => {
      console.log("data.rows: ", data.rows);
      const templateVars = { orderItems: data.rows };
      /* Render the order_details page */
      res.render('order_details', templateVars);
      })
  });
  return router;
};
