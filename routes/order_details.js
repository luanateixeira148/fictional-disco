const express        = require('express');
const app            = express();
const cookieParser   = require('cookie-parser')
const router         = express.Router();

app.use(cookieParser());

// should this be a POST ? /order_details
router.post ('/', (req, res) => {

  const order = req.cookies;
  const templateVars = {
    order
  }

  console.log('ORDER:', order);
  res.render('order_details', templateVars);
});

module.exports = router;
