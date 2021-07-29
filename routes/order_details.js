const express = require('express');
const router = express.Router();

module.exports = function(db) {
  // POST /order_details => When a user starts a new order
  router.post('/', (req, res) => {
    console.log("posting order_details to database");
    const sql = `INSERT INTO order_items ($1, $2);`
    const values = [req.params.item_id, req.params.quantity];
    db.query(sql, values)
      .then((data) => {
        console.log("data.rows: ", data.rows);
        const templateVars = { menuItems: data.rows };
        /* Render the menu page with all menu items*/
        res.render('order_details', templateVars);
      })
  });

  // GET /order_details => When a user is viewing their cart
  router.get('/', (req, res) => {
    console.log("getting order_items from database!");

    const sql = `
    SELECT *, sum(quantity * price) as total_price, sum(quantity) as total_items
    FROM orders
    JOIN order_items ON orders.id = order_id
    JOIN items ON item_id = items.id
    GROUP BY order_items.id
    ORDER BY orders.id
    ;
    `;

    const sql2 = `
    SELECT * FROM orders
    ;`


    // const values = [req.params.order_id];

    db.query(sql2)
      .then(console.log('THEN'))
      .then((order) => {
        console.log("data.rows: ", order.rows);
        // const templateVars = { orderItems: order.rows };
        /* Render the order_details page */
        // res.redirect('order_details', templateVars);
        res.render('order_details');

        })
    });

  return router;
};
