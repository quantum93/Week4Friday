// ------------------------------ business logic -------------------------------
function Pizza(size, topping1, topping2) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
}

Pizza.prototype.yourPrice = function() {
  var pizzaSizes = {small:0.8, medium:1.0, large:1.5, extralarge:2.0}
  var price, sizePrice, toppingPrice;
  toppingPrice = 3;
  price = sizePrice = 10; //basic price of all kinds of pizza
  if (this.topping1 && this.topping2) {
    toppingPrice = toppingPrice *2
  } else {
    toppingPrice = toppingPrice
  }
  if (this.size === 'small') {
    sizePrice = sizePrice + ((sizePrice * pizzaSizes.small) - sizePrice)
    toppingPrice = toppingPrice*(pizzaSizes.small)
  }
  if (this.size === 'medium') {
    sizePrice = sizePrice*(pizzaSizes.medium)
    toppingPrice = toppingPrice*(pizzaSizes.medium)
  }
  if (this.size === "large") {
    sizePrice = sizePrice + ((sizePrice*pizzaSizes.large) - sizePrice)
    toppingPrice = toppingPrice*(pizzaSizes.large)
  }
  if (this.size === 'extralarge') {
    sizePrice = sizePrice + ((sizePrice*pizzaSizes.extralarge) - sizePrice)
    toppingPrice = toppingPrice*(pizzaSizes.extralarge)
  }
  price = toppingPrice + sizePrice;
  return price
}
// --------------------------- User interface logic ----------------------------
$(document).ready(function() {
  $(".display").submit(function(event) {
    event.preventDefault();
    var size = $(".size").val()
    var topping1 = $(".topping1").val();
    var topping2 = $(".topping2").val();
    console.log(topping2);
    var pizza = new Pizza(size, topping1, topping2);
    var price = pizza.yourPrice();

    $(".hidden").show();
    $(".size").text(size);
    $(".topping1").text(topping1);
    if (topping2 === "") {
        $(".topping2").text("You didn't choose a second topping.");
    } else {
      $(".topping2").text(topping2);
    }
    $(".price").text(price);
  });
});
