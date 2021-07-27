const express        = require('express');
const app            = express();
const cookieParser   = require('cookie-parser')
const router         = express.Router();

app.use(cookieParser());

// GET /order_details
router.get ('/', (req, res) => {

  const order = req.cookies;

  console.log('ORDER:', order);

  res.render('order_details');
});


module.exports = router;
