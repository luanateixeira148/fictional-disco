const express = require('express');
const router = express.Router();

module.exports = function (db) {

  // GET /menu // rendering the menu items from the database
  router.get('/', (req, res) => {
    console.log("Rendered database items to menu page!");
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

    const cart = req.body.cart;
    const qty = req.body.cart[0].qty;
    const item_id = req.body.cart[0].item_id;

    console.log('Posting cart items into the database!');

    const promises = [];
    // insert into the orders table (user_id) + RETURNING id (creates the order table)
    // Start a new order in the orders table by creating an order for this user
    const newOrderSql = `
      INSERT INTO orders (user_id)
      VALUES (1)
      RETURNING *;
    `
    // This promise ensures orders by this user shows up in the orders table
    const orderPromise = db.query(newOrderSql);
    promises.push(orderPromise);

    // loop through cart array and insert each item into the order_items table
    for (let item of cart) {
      item = `
      INSERT INTO order_items (item_id, quantity)
      VALUES ($1, $2)
      RETURNING *;
      `
      const values = [item_id, qty];

      // This promise ensures each order_item is inserted into the order_items table
      const itemPromise = db.query(item, values);
      promises.push(itemPromise);

      // console.log('cart inside order_items loop:', cart);
    }

    // Returns all the promises at once in the order they are received
    Promise.all(promises).then((response) => {

      //all done here (send SMS here)

    })

    res.status(201).send();
    // Our cart should return an array of objects with key-value pairs holding item_id and qty
    console.log('cart outside loop:', cart);
  });

  return router;
};
