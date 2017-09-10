// an array with all of our cart items
var cart = [];
var total = 0;

var updateCart = function () {
  $('.cart-list').empty();
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
// use handlebars

var source = $('#store-template').html();
var template = Handlebars.compile(source);
// for(var i=0; i<cart.length;i++){
//   var newHTML = template({name:cart[i].name, price:cart[i].price});
//   $('.cart-list').append(newHTML);
// }

cart.forEach(function (item) {
  var newHTML = template(item);
  $('.cart-list').append(newHTML);
  
});
$('.total').text(total);
}


var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  cart.push(item);
  total += item.price;

}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  cart = [];
  total = 0;
  updateCart();
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = {
    name:$(this).parent().parent().data().name,
    price:$(this).parent().parent().data().price,
  };
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
