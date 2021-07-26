const express = require('express');
const router = express.Router();


// GET /menu
router.get ('/', (req, res) => {
  res.render('menu');
});

module.exports = router;
