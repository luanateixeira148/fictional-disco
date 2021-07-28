const express = require('express');
const router = express.Router();

module.exports = function(db) {

  // GET /menu
  router.get('/', (req, res) => {
    console.log("getting menu items from database...");
    const sql = `SELECT * FROM items`;
    db.query(sql)
      .then((data) => {
        console.log("data.rows: ", data.rows);
        const templateVars = { menuItems: data.rows };
        /* Render the menu page with all menu items*/
        res.render('menu', templateVars);
      })

  });

  // // GET /menu/:id
  // router.get('/:id', (req, res) => {
  //   db.query('SELECT * FROM items WHERE id = $1;', [req.params.id])
  //     .then((data) => {
  //       const templateVars = { menuItems: data.rows[0] };
  //       /* Render the menu page with a single menu item*/
  //       res.render('menu', templateVars);
  //     })
  // });

  return router;
};
