const express = require('express');
const router = express.Router();


// GET /order_details
router.get ('/', (req, res) => {
  res.render('order_details');
});

module.exports = router;
