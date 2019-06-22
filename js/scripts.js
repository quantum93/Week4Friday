// ------------------------------ business logic -------------------------------
function User(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
}

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.sizePrice = function() {
  var pizzaSizes = {'small':0.8, 'medium':1.0, 'large':1.5, 'extralarge':2.0};
  var sizePrice = 10;
  if (this.size === 'small') {
    sizePrice = sizePrice + ((sizePrice * pizzaSizes.small) - sizePrice);
  }
  if (this.size === 'medium') {
    sizePrice = sizePrice + ((sizePrice * pizzaSizes.medium) - sizePrice);
  }
  if (this.size === "large") {
    sizePrice = sizePrice + ((sizePrice*pizzaSizes.large) - sizePrice);
  }
  if (this.size === 'extralarge') {
    sizePrice = sizePrice + ((sizePrice*pizzaSizes.extralarge) - sizePrice);
  }
  return sizePrice;
};

Pizza.prototype.toppingPrice = function() {
  var pizzatoppings = {'Cheese':0.8, 'Pepperoni':1.0, 'Artichoke':1.5, 'Anchovy':2.0};
  var toppingPrice = 2;
  if (this.topping1 && this.topping2) {
    toppingPrice = toppingPrice *2;
  } else {
    toppingPrice = toppingPrice;
  }
  toppingPrice = toppingPrice*(pizzaSizes.small);
  toppingPrice = toppingPrice*(pizzaSizes.medium);
  toppingPrice = toppingPrice*(pizzaSizes.large);
  toppingPrice = toppingPrice*(pizzaSizes.extralarge);
};

Pizza.prototype.yourPrice = function() {
  price = toppingPrice + sizePrice;
  return price;
};
// --------------------------- User interface logic ----------------------------
$(document).ready(function() {
  $(".display").submit(function(event) {
    event.preventDefault();
    var firstName = $("input").val();
    var lastName = $("input").val();
    var email = $("input").val();
    var size = $(".size").val();
    var toppings = [];
    for (var i = 0; i < 4; i++) {
      toppings[i] = $("input").val();
    }
    console.log(toppings)
    // var pizza = new Pizza(size, toppings);
    // var price = pizza.yourPrice();
    //
    // $(".hidden").show();
    // $(".order").append("Your pizza is " + size + " size " );
    // $(".order").append("with " + topping1);
    // if (topping2 === "") {
    //     $(".order").append(" and you didn't choose a second topping.");
    // } else {
    //   $(".order").append(" and " + topping2);
    // }
    // $(".price").text(price);
  });
});
