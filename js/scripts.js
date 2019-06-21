// ------------------------------ business logic -------------------------------
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.yourPrice = function() {
  var price, initialPrice;
  price = initialPrice = 10; //basic price of all kinds of pizza

  if (this.size === 'small')
  price = price - (initialPrice - (initialPrice*0.7))
  if (this.size === 'medium')
  price = initialPrice
  if (this.size === large')
  price = price + ((initialPrice*1.5) - initialPrice)
  if (this.size === 'extra-large')
  price = price + ((initialPrice*2.0) - initialPrice)

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
