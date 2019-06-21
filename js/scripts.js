// ------------------------------ business logic -------------------------------
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.yourPrice = function() {
  var price;
  price = 10; //basic price of all kinds of pizza
}


// --------------------------- User interface logic ----------------------------
$(document).ready(function () {
  $("").submit(function (event) {
    event.preventDefault();
  });
  $("").click(function (event) {
    event.preventDefault();
  });
});
