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
  // clicking the "Add to order" button stores an orderItem to the frontend cart
  // and calls a post /menu request to update the orders and order_items table in the db
  const $form = $('.add-to-order')
  $form.submit(function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    const split = data.split('&');
    const orderItem = {};
    for (const datum of split) {
      const keyValue = datum.split('=');
      orderItem[keyValue[0]] = +keyValue[1];
    }
    // each orderItem is an object with item_id and qty
    cart.push(orderItem);
    renderCart(cart);
    console.log('cart:', cart);

  });
  // When we click the accept order button...
  const $acceptOrder = $('#accept-order')
  $acceptOrder.submit(function(event) {
    event.preventDefault();
    console.log('Clicked accept order button!');
    const data = $(this).serialize();
    console.log('data: ', data);
    const split = data.split('=');
    console.log('split: ', split);

    //post request

  })

  const $checkout = $('.checkout');
  $checkout.on('submit', function(event) {
    event.preventDefault();
    console.log('Clicked checkout button!');
    // if quantity = 0, show error
    $.post('/menu', {'cart': cart})
      .then((response) => {
        console.log(response);
        console.log('Calling post request to menu...');
        window.location = `/orders/${response.id}`;
      })
    console.log('Post to menu finished!');
    // $.get('/orders')
    //   .then(() => {
    //     console.log('Get request to /orders sent!');
    //   })
    // console.log('Get to orders page finished!');
  });

  const $cart = $('#cart');
  const renderItem = function(item) {
    const $item = $(`<p> Item # ${item.item_id} Qty: ${item.qty} </p>`);
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


