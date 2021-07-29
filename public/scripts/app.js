<<<<<<< HEAD
=======
//************************************************************/
//Default code
>>>>>>> 74b927cb6258acb78b903349571046720de0f8cf
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
<<<<<<< HEAD

$(() => {

  const createItem = (item) => {
    const $item = $(`
    <div class="item-card">
          <img class="food-photo" src="${item.photo_url}" alt="">
          <div class="details">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="price-tag">
              <p id="price">${item.price}</p>
              <p id="category">${item.category}</p>
            </div>
          </div>
          <form action="POST">
            <input class="qty" name='qty' type="number">
            <button class="confirm">Add to order</button>
          </form>
        </div>
    `);
    return $item;
  };

  const renderItems = (items) => {
    const $itemContainer = $('#items');
    $itemContainer.empty();

    for (const item of items) {
      const $item = createItem(item);
      $itemContainer.append($item);
    }
  };

  $.get('/api/menu')
    .then((items) => {
      console.log(items);
      renderItems(items);
    });

=======
//***********************************************************/
console.log('***App.js is connected***');

$(() => {

  const cart = [];
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

    cart.push(orderItem);
    renderCart(cart);
    console.log('cart:', cart);

    // if quantity = 0, show error
    $.post('/menu', {'cart': cart})
      .then(() => {
        console.log('YAY');
      })

  });

  const $checkout = $('.checkout');
  $checkout.on('submit', function(event) {
    event.preventDefault();

    console.log('HELLO');
    $.get('/order_details')
      .then(() => {
        console.log('YAY ORDER');
      })

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

>>>>>>> 74b927cb6258acb78b903349571046720de0f8cf
});


