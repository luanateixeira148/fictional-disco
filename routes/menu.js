const express = require('express');
const router = express.Router();

const tempMenuDatabase = [
  {
    id: 1,
    name: 'Rapberry Ice Cream',
    description: 'Delicious raspberry ice cream',
    price: '$11',
    photo_url: 'https://d2cbg94ubxgsnp.cloudfront.net/Pictures/1024x536/4/0/8/132408_shutterstock_406445776.jpg',
    category: 'Fruity'
  },
  {
    id: 2,
    name: 'Lemon Ice Cream',
    description: 'Amazing lemon ice cream',
    price: '$9',
    photo_url: 'https://www.seasonsandsuppers.ca/wp-content/uploads/2016/02/lemon-icecream1200.jpg',
    category: 'Fruity'
  },
]

// GET /menu
/* Render the menu page */
router.get ('/', (req, res) => {

  const templateVars = { menuItems: tempMenuDatabase };

  res.render('menu', templateVars);

});


module.exports = router;
