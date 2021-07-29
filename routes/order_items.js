const express = require('express');
const router = express.Router();

module.exports = function (db) {

  // GET /menu // rendering the menu items from the database
  router.get('/', (req, res) => {
    console.log("Rendered items to menu page through order_items.js!");
    const sql = `SELECT * FROM items`;
    db.query(sql)
      .then((data) => {
        // console.log("data.rows: ", data.rows);
        const templateVars = { menuItems: data.rows };
        res.render('menu', templateVars);
      })
  });

  // POST /menu // create a new order for the user, put items in cart into order_items table
  router.post('/', (req, res) => {
    console.log('req.body: ', req.body);
    const cart = req.body.cart;
    console.log('cart:', cart);
    console.log('Posting cart items into the database!');

    // Start a new order in the orders table by creating an order for this user
    const newOrderSql = `
      INSERT INTO orders (user_id)
      VALUES (1)
      RETURNING *;
    `
    let orderObject;
    // This ensures orders by this user shows up in the orders table
    db.query(newOrderSql)
      .then((data) => data.rows[0])
      .then((order) => {
        orderObject = order;
        // const { id } = order;
        // loop through cart array and insert each item into order_items
        const promises = [];
        cart.forEach((item) => {
          // const { item_id } = order;
          const qty = item.qty;
          //FIX THIS TO UPDATE ITEM ID
          const item_id = item.item_id;
          const newItemSql = `
            INSERT INTO order_items (item_id, order_id, quantity)
            VALUES ($1, $2, $3) RETURNING *;
          `;
          const values = [item_id, orderObject.id , qty];
          // each order_item is inserted into the order_items table
          const itemPromise = db.query(newItemSql, values);
          promises.push(itemPromise);
        });

        // returns a singular promise to cover stack of promises
        return Promise.all(promises)
      })
      .then(() => {
        res.json(orderObject);
        //FIRE SMS FROM RESTAURANT HERE
      })
      .catch((err) => console.log("Error:", err.message));

    // res.status(201).send();
    // Our cart should return an array of objects with key-value pairs holding item_id and qty
    console.log('cart outside loop:', cart);
  });

  return router;
};
