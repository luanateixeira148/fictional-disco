const express = require('express');
const router = express.Router();

const tempMenuDatabase = [
  {
    id: 1,
    name: 'Brown Sugar Milk Tea',
    description: 'Signature milk tea with brown sugar syrup',
    price: '$5',
    photo_url: 'https://www.ohhowcivilized.com/wp-content/uploads/brown-sugar-tea-latte-7.jpg',
    category: 'Milky'
  },
  {
    id: 2,
    name: 'Matcha Milk Tea',
    description: 'Earthy matcha mixed with fresh milk',
    price: '$5',
    photo_url: 'https://www.ohhowcivilized.com/wp-content/uploads/iced-matcha-latte-10.jpg',
    category: 'Milky'
  },
  {
    id: 3,
    name: 'Earl Grey Milk Tea',
    description: 'Bold and rich milk tea with a hint of bergamot',
    price: '$5',
    photo_url: 'https://www.ohhowcivilized.com/wp-content/uploads/starbucks-iced-chai-tea-latte-8.jpg',
    category: 'Milky'
  },
  {
    id: 4,
    name: 'Thai Milk Tea',
    description: 'Robust black tea sweetened with evaporated milk',
    price: '$5',
    photo_url: 'https://www.ohhowcivilized.com/wp-content/uploads/thai-iced-tea-7.jpg',
    category: 'Milky'
  },
  {
    id: 5,
    name: 'Roasted Milk Tea',
    description: 'Delicious Japanese milk tea topped with pearls',
    price: '$5',
    photo_url: 'https://www.ohhowcivilized.com/wp-content/uploads/bubble-tea-5.jpg',
    category: 'Milky'
  },
]

// GET /menu
/* Render the menu page */
router.get ('/', (req, res) => {

  const templateVars = { menuItems: tempMenuDatabase };

  res.render('menu', templateVars);

});


module.exports = router;
