//************************************************************/
//Default code
// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });
//***********************************************************/
console.log('***App.js is connected***');

$(() => {
  // Ajax POST to a route that just adds the item in your cart table

  // volatile memory
  const cart = [];

  const $form = $('.add-to-order')
  $form.submit( function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    console.log('data:', data);
    cart.push(data);
    console.log(cart);
    renderCart(cart);

    // if quantity = 0, show error

    // $.post('/menu', data)
    //   .then(() => {

    //     console.log('YAY');
    //   })

  });

  const $cart = $('#cart');
  const renderItem = function(item) {
    const $item = $(`<h2> ${item} </h2>`);
    return $item;
  }

  const renderCart = function(cart) {
    $cart.empty();
    for (let item of cart) {
      const $item = renderItem(item);
      $cart.append($item);
    }

  }

  renderCart(cart);

});


