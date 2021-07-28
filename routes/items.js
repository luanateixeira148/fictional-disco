const express = require('express');
const router = express.Router();

module.exports = function (db) {

  // GET /items
  router.get('/', (req, res) => {
    console.log("connected to database!");
    const sql = `SELECT * FROM items`;
    db.query(sql)
      .then((data) => {
        // console.log("data.rows: ", data.rows);
        const templateVars = { menuItems: data.rows };
        res.render('menu', templateVars);
      })
  });

  router.post('/', (req, res) => {
    console.log('POSTING IS WORKING');

    // insert into the orders table (user id) + RETURNING id (creates the order table)

    // loop through cart array and insert each item into the order table
    // promise.all
    const promises = [];
    for (const item of cart) {
      //create the promise
      const promise = db.query(item);
      promises.push(promise);

    }

    Promise.all(promises).then((response) => {

      //all done here (send SMS here)
    })



    res.status(201).send();

  });

  return router;
};



