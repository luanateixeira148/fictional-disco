const express = require('express');
const router = express.Router();


// GET /order_confirmation
router.get ('/', (req, res) => {
  res.render('order_confirmation');
});

module.exports = router;
