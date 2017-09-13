
// an array with all of our cart items
var cart = {};
//var mapping = {};

var updateCart = function () {
  $('.cart-list').empty();
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  // use handlebars

  var source = $('#store-template').html();
  var template = Handlebars.compile(source);
  // for (var item in cart){
  //   var newHTML = template(item);
  //   $('.cart-list').append(newHTML);
  // }

  var items = Object.keys(cart);
  var total = 0;
  var totalQuantity=0;
  for (var i = 0; i < items.length; i++) {
    var name = items[i];
    totalQuantity+=cart[name].quantity;
    var item = {
      name: name.charAt(0).toUpperCase() + name.substring(1,name.length),
      price: cart[name].price,
      quantity: cart[name].quantity

    };
    var newHTML = template(item);
    $('.cart-list').append(newHTML);
    total += item.price * item.quantity;
  }

  $('#shopping-cart-feedback').text(totalQuantity+' ITEMS - $'+total);
  
 var elm = document.getElementsByClassName('fa-shopping-cart')[0];
 var newOne = elm.cloneNode(true);
 elm.parentNode.replaceChild(newOne,elm);

  
  $('.total').text(total);
}
function increaseQuant(name) {
  cart[name].quantity++;
  updateCart();
};

function decreaseQuant(name) {
  cart[name].quantity--;
  if(cart[name].quantity === 0){
    delete cart[name];
  };
  updateCart();
};

var addItem = function (item) {
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)  

  if (cart[item.name]) {
    cart[item.name].quantity++;
  }
  else {
    cart[item.name] = {
      price: item.price,
      quantity: 1
    };
  }

};

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  cart = [];
  updateCart();
}

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggleClass('show');
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.item').data();
  addItem(item);
  updateCart();
});

$('.cart-list').on('click', '.fa-plus', function () {
  var name = $(this).closest('.itemRow').find(".cart-item").data().name.toLowerCase();

  increaseQuant(name);
});
$('.cart-list').on('click', '.fa-minus', function () {
  var name = $(this).closest('.itemRow').find(".cart-item").data().name.toLowerCase();
 
  decreaseQuant(name);
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
