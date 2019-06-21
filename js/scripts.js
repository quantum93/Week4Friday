// ------------------------------ business logic -------------------------------
function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.yourPrice = function() {
  var price, sizePrice;
  price = sizePrice = 10; //basic price of all kinds of pizza

  if (this.size === 'small') {
    price = price - (sizePrice - (sizePrice*0.7))
    if (this.topping === 'cheese' || this.topping === 'pepperoni' || this.topping === 'artichoke' || this.topping === 'anchovy') {
      price = price + ((sizePrice*1.1) - sizePrice)
    }
    if (this.topping === 'cheese' && (this.topping === 'pepperoni' || this.topping === 'artichoke' || this.topping === 'anchovy')) {
      price = price + ((sizePrice*1.2) - sizePrice)
    }
    if (this.topping === 'cheese' && this.topping === 'pepperoni' && (this.topping === 'artichoke' || this.topping === 'anchovy')) {
      price = price + ((sizePrice*1.3) - sizePrice)
    }
    if (this.topping === 'cheese' && this.topping === 'pepperoni' && this.topping === 'artichoke' && this.topping === 'anchovy') {
      price = price + ((sizePrice*1.4) - sizePrice)
    }

  if (this.size === 'medium') {
    price = sizePrice
    if (this.topping === 'cheese' || this.topping === 'pepperoni' || this.topping === 'artichoke' || this.topping === 'anchovy') {
      price = price + ((sizePrice*1.1) - sizePrice)
    }
    if (this.topping === 'cheese' && (this.topping === 'pepperoni' || this.topping === 'artichoke' || this.topping === 'anchovy')) {
      price = price + ((sizePrice*1.2) - sizePrice)
    }
    if (this.topping === 'cheese' && this.topping === 'pepperoni' && (this.topping === 'artichoke' || this.topping === 'anchovy')) {
      price = price + ((sizePrice*1.3) - sizePrice)
    }
    if (this.topping === 'cheese' && this.topping === 'pepperoni' && this.topping === 'artichoke' && this.topping === 'anchovy') {
      price = price + ((sizePrice*1.4) - sizePrice)
    }
  }
  if (this.size === large') {
    price = price + ((sizePrice*1.5) - sizePrice)
    if (this.topping === 'cheese' || this.topping === 'pepperoni' || this.topping === 'artichoke' || this.topping === 'anchovy') {
      price = price + ((sizePrice*1.1) - sizePrice)
    }
    if (this.topping === 'cheese' && (this.topping === 'pepperoni' || this.topping === 'artichoke' || this.topping === 'anchovy')) {
      price = price + ((sizePrice*1.2) - sizePrice)
    }
    if (this.topping === 'cheese' && this.topping === 'pepperoni' && (this.topping === 'artichoke' || this.topping === 'anchovy')) {
      price = price + ((sizePrice*1.3) - sizePrice)
    }
    if (this.topping === 'cheese' && this.topping === 'pepperoni' && this.topping === 'artichoke' && this.topping === 'anchovy') {
      price = price + ((sizePrice*1.4) - sizePrice)
    }
  }
  if (this.size === 'extra-large') {
    price = price + ((sizePrice*2.0) - sizePrice)
    if (this.topping === 'cheese' || this.topping === 'pepperoni' || this.topping === 'artichoke' || this.topping === 'anchovy') {
      price = price + ((sizePrice*1.1) - sizePrice)
    }
    if (this.topping === 'cheese' && (this.topping === 'pepperoni' || this.topping === 'artichoke' || this.topping === 'anchovy')) {
      price = price + ((sizePrice*1.2) - sizePrice)
    }
    if (this.topping === 'cheese' && this.topping === 'pepperoni' && (this.topping === 'artichoke' || this.topping === 'anchovy')) {
      price = price + ((sizePrice*1.3) - sizePrice)
    }
    if (this.topping === 'cheese' && this.topping === 'pepperoni' && this.topping === 'artichoke' && this.topping === 'anchovy') {
      price = price + ((sizePrice*1.4) - sizePrice)
    }
  }
  return price
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
