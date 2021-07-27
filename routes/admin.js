const express = require('express');
const router = express.Router();
const twilio = require('twilio');

// GET /admin
router.get ('/', (req, res) => {
  res.render('admin');
});
//const accountSid = process.env.ACCOUNT_TWILIO ;
//const authToken = process.env.TOKEN_TWILIO;

//const twilio = require('twilio');
//const client = new twilio(accountSid, authToken);

//client.messages
//  .create({
//    body: 'Hello from Node',
//    to: '+12345678901', // Text this number
//    from: '+18722334590', // From a valid Twilio number
//  })
//  .then((message) => console.log(message.sid));



module.exports = router;
