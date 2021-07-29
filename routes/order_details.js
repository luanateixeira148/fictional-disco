const express = require('express');
const router = express.Router();

module.exports = function (db) {

  // GET /order_details
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
      .then(console.log('Managed to run query inside GET /order_details'))
      // .then(() => {
      //   console.log('Managed to run THEN after');
      //   res.render('order_details');
      //   console.log('Managed to run res.render order_details');
      // })

      .then((order) => {
        //order.rows is an array of order objects
        console.log("order.rows: ", order.rows);
        const templateVars = { orderItems: order.rows };
        /* Render the order_details page */
        // res.redirect('order_details', templateVars);
        res.render('order_details', templateVars);
        })
    });

  return router;
};
