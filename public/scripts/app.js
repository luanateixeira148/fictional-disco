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

  const cart = [];
  const $form = $('.add-to-order')
  $form.submit( function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    const split = data.split('&');
    const orderItem = {};
    for (const datum of split) {
      const keyValue = datum.split('=');
      orderItem[keyValue[0]] = +keyValue[1];
    }

    cart.push(orderItem);
    renderCart(cart);
    console.log('cart:', cart);

    // if quantity = 0, show error
    // $.post('/menu', data)
    //   .then(() => {
    //     console.log('YAY');
    //   })

  });

  const $cart = $('#cart');
  const renderItem = function(item) {
    const $item = $(`<h2> ${item.item_id}, ${item.qty} </h2>`);
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


