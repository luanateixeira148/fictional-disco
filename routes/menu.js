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


// POST route to add item to cart by setting cookies and returning to the same page
router.post('/', (req, res) => {

  const product = req.body.item_name;
  const quantity = req.body.qty;

  if (!req.cookies['cart']) {

    const initialOrder = JSON.stringify([{product, quantity}]);
    res.cookie('cart', initialOrder);

  } else {

  console.log('req.cookies:', req.cookies);
  let cartText = req.cookies.cart;

  let cart = JSON.parse(cartText);

  // cart.push({product, quantity});
  let updatedCart = [{product, quantity}, ...cart]

  res.cookie('cart', JSON.stringify(updatedCart));
  console.log('updated cart:', req.cookies.cart);

  }

  res.redirect('/menu');
});


module.exports = router;
