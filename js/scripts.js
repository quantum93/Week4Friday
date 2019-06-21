// ------------------------------ business logic -------------------------------
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping
}

Pizza.prototype.yourPrice = function() {
  var price, sizePrice, toppingPrice;
  price = sizePrice = 10; //basic price of all kinds of pizza
  toppingPrice = 3;
  if (this.size === 'small') {
    sizePrice = sizePrice + ((sizePrice * 0.7) - sizePrice)
  }
  if (this.size === 'medium') {
    sizePrice = sizePrice
  }
  if (this.size === "large") {
    sizePrice = sizePrice + ((sizePrice*1.5) - sizePrice)
  }
  if (this.size === 'extra-large') {
    sizePrice = sizePrice + ((sizePrice*2.0) - sizePrice)
  }
  price = toppingPrice + sizePrice;
  return price
}
// --------------------------- User interface logic ----------------------------
$(document).ready(function() {
  $(".display").submit(function(event) {
    event.preventDefault();
    var size = $(".size").val()
    var topping = $(".topping").val();
    var pizza = new Pizza(size, topping);
    var price = pizza.yourPrice();

    $(".hidden").show();
    $(".size").text(size);
    $(".topping").text(topping);
    $(".price").text(price);
  });
});
