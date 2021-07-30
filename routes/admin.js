const express = require('express');
const router = express.Router();
const twilio = require('../API/twilio');
const users = require('./users');

module.exports = function(db) {

  // GET /admin // renders the customer's order from the database
  router.get ('/orders/:id', (req, res) => {
    // admin template now has access to the order object
    console.log('Get route to admin is working!')
    const sql = `
    SELECT * FROM orders
    WHERE orders.id = $1
    ;`
    const values = [req.params.id];
    db.query(sql, values)
      .then((data) => {
        const order = data.rows[0];
        console.log('order: ', order);
        const templateVars = { order };
        res.render('admin', templateVars);
      })
  });

  // POST /admin/orders/:id
  router.post('/orders/:id', (req, res) => {
    console.log('req.body:', req.body)
    // + converts this into a number
    const time = +req.body.ETA;
    const order_id = req.params.id;
    const sql = `
    UPDATE orders
    SET pickup_time = $1, order_status = $2
    WHERE id = $3
    ;`
    const values = [time, 'CONFIRMED', order_id]
    db.query(sql, values)
      .then(() => {
        twilio.message(time);
        console.log('message sent to twilio!')
        // res.send('Post to admin worked');
        res.redirect('/admin/confirm');
      })
  });

  // GET /admin/confirm => renders the order_id and status
  router.get('/confirm', (req, res) => {
    console.log('We are able to GET /confirm');
    res.render('confirm')

  });
  return router;
}
