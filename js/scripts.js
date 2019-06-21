// ------------------------------ business logic -------------------------------
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.yourPrice = function() {
  var price, sizePrice;
  price = sizePrice = 10; //basic price of all kinds of pizza
  console.log(sizePrice);
  console.log(price);
  if (this.size === 'small') {
    price = price - (sizePrice - (sizePrice*0.7))
  }
  if (this.size === 'medium') {
    price = sizePrice
  }
  if (this.size === "large") {
    price = price + ((sizePrice*1.5) - sizePrice)
  }
  if (this.size === 'extra-large') {
    price = price + ((sizePrice*2.0) - sizePrice)
  }
  console.log(price);
  return price
}
// --------------------------- User interface logic ----------------------------
$(document).ready(function() {
  $(".display").submit(function(event) {
    event.preventDefault();
    var size = $(".size").val()
    console.log(size);
    var topping = $(".topping").val()
    console.log(topping);

    var pizza = new Pizza(size, topping);
    var price = pizza.yourPrice();
    console.log(price);

    $("#show-task").show();
    $(".size").text(size);
    $(".topping").text(topping);
    $(".price").text(price);
  });
});
