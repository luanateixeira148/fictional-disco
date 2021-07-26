const express = require('express');
const router = express.Router();


// GET /waiting_confirmation
router.get ('/', (req, res) => {
  res.render('waiting_confirmation');
});

module.exports = router;
