const express = require('express');
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const tempMenuDatabase = [
  {
    id: 1,
    name: 'Rapberry Ice Cream',
    description: 'Delicious raspberry ice cream',
    price: '$11',
    photo_url: 'https://d2cbg94ubxgsnp.cloudfront.net/Pictures/1024x536/4/0/8/132408_shutterstock_406445776.jpg',
    category: 'fruits'
  },
  {
    id: 2,
    name: 'Lemon Ice Cream',
    description: 'Amazing lemon ice cream',
    price: '$9',
    photo_url: 'https://www.seasonsandsuppers.ca/wp-content/uploads/2016/02/lemon-icecream1200.jpg',
    category: 'fruits'
  },
]

// GET /menu
/* Render the menu page */
router.get ('/', (req, res) => {

  const templateVars = { menuItems: tempMenuDatabase };
  res.render('menu', templateVars);

});


// POST route to add item to cart by setting cookies
router.post('/', (req, res) => {
  const templateVars = { menuItems: tempMenuDatabase };
  const quantity = req.body.qty;

  console.log(quantity);
  // how to get the name of the item?
  res.cookie('quantity', quantity);

  // how to stay on the same page after submitting the request?
  res.redirect('/order_details');
})

module.exports = router;
