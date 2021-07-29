const express = require('express');
const router = express.Router();

module.exports = function(db) {

<<<<<<< HEAD
  // GET /menu
=======
  // GET /items // rendering the items on the page
>>>>>>> 74b927cb6258acb78b903349571046720de0f8cf
  router.get('/', (req, res) => {
    console.log("getting menu items from database...");
    const sql = `SELECT * FROM items`;
    db.query(sql)
      .then((data) => {
        // console.log("data.rows: ", data.rows);
        const templateVars = { menuItems: data.rows };
        /* Render the menu page with all menu items*/
        res.render('menu', templateVars);
      })
  });

  router.post('/', (req, res) => {

    const cart = req.body.cart;
    const qty = req.body.cart[0].qty;
    const item_id = req.body.cart[0].item_id;

    console.log('POSTING IS WORKING');

    // insert into the orders table (user id) + RETURNING id (creates the order table)
    const sql = `
      INSERT INTO orders (user_id)
      VALUES (1)
      RETURNING id;
    `

    // loop through cart array and insert each item into the order table
    // promise.all
    const promises = [];
    for (let item of cart) {
      item = `
      INSERT INTO order_items (item_id, quantity)
      VALUES ($1, $2)
      RETURNING id;
      `
      const values = [item_id, qty];

      //create the promise
      const promise = db.query(item, values);
      promises.push(promise);

<<<<<<< HEAD
  });

  // // GET /menu/:id
  // router.get('/:id', (req, res) => {
  //   db.query('SELECT * FROM items WHERE id = $1;', [req.params.id])
  //     .then((data) => {
  //       const templateVars = { menuItems: data.rows[0] };
  //       /* Render the menu page with a single menu item*/
  //       res.render('menu', templateVars);
  //     })
  // });

=======
      console.log('cart inside loop:', cart);
    }

    Promise.all(promises).then((response) => {

      //all done here (send SMS here)

    })


    res.status(201).send();
    console.log('cart outside loop:', cart);
  });

>>>>>>> 74b927cb6258acb78b903349571046720de0f8cf
  return router;
};



