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

});
