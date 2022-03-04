var quantity = 1;
document.getElementById("quantity").innerHTML = quantity;
var price = 10000;
document.getElementById("total").innerHTML = price + " VND";
function increase() {
  quantity = quantity + 1;
  price = 10000 * quantity;
  document.getElementById("quantity").innerHTML = quantity;
  document.getElementById("total").innerHTML = price + " VND";
}
function decrease() {
  if (quantity > 1) {
    quantity = quantity - 1;
    price = 10000 * quantity;
    document.getElementById("quantity").innerHTML = quantity;
    document.getElementById("total").innerHTML = price + " VND";
  }
}
function addToCartFC() {
  alert("You added " + quantity + " Fried Chicken parts to cart");
  var friedChicken = {
    name: "Fried Chicken",
    number: quantity,
    money: price,
  };
  localStorage.setItem("friedchicken", JSON.stringify(friedChicken));
}
function addToCartHB() {
  alert("You added " + quantity + " Hamburger parts to cart");
  var burger = {
    name: "Hamburger",
    number: quantity,
    money: price,
  };
  localStorage.setItem("hamburger", JSON.stringify(burger));
}
function addToCartCN() {
  alert("You added " + quantity + " Chicken Nuggets parts to cart");
  var nuggets = {
    name: "Chicken Nuggets",
    number: quantity,
    money: price,
  };
  localStorage.setItem("chickennugget", JSON.stringify(nuggets));
}
function addToCartCH() {
  alert("You added " + quantity + " Chips parts to cart");
  var chips = {
    name: "Chips",
    number: quantity,
    money: price,
  };
  localStorage.setItem("chips", JSON.stringify(chips));
}
function addToCartHD() {
  alert("You added " + quantity + " Hot Dog parts to cart");
  var hotdog = {
    name: "Hot dog",
    number: quantity,
    money: price,
  };
  localStorage.setItem("hotdog", JSON.stringify(hotdog));
}
function addToCartTC() {
  alert("You added " + quantity + " Taco parts to cart");
  var taco = {
    name: "Taco",
    number: quantity,
    money: price,
  };
  localStorage.setItem("taco", JSON.stringify(taco));
}
function addToCartBT() {
  alert("You added " + quantity + " Burrito parts to cart");
  var burrito = {
    name: "Burrito",
    number: quantity,
    money: price,
  };
  localStorage.setItem("burrito", JSON.stringify(burrito));
}
function addToCartSW() {
  alert("You added " + quantity + " Sandwich parts to cart");
  var sandwich = {
    name: "Sandwich",
    number: quantity,
    money: price,
  };
  localStorage.setItem("sandwich", JSON.stringify(sandwich));
}
function addToCartCD() {
  alert("You added " + quantity + " Corndog parts to cart");
  var corndog = {
    name: "Corndog",
    number: quantity,
    money: price,
  };
  localStorage.setItem("corndog", JSON.stringify(corndog));
}
function addToCartPP() {
  alert("You added " + quantity + " Pepperoni Pizza parts to cart");
  var pizza = {
    name: "Pepperoni Pizza",
    number: quantity,
    money: price,
  };
  localStorage.setItem("pizza", JSON.stringify(pizza));
}
function addToCartKB() {
  alert("You added " + quantity + " Kebab parts to cart");
  var kebab = {
    name: "Kebab",
    number: quantity,
    money: price,
  };
  localStorage.setItem("kebab", JSON.stringify(kebab));
}
function addToCartCK() {
  alert("You added " + quantity + " Coke parts to cart");
  var coke = {
    name: "Coke",
    number: quantity,
    money: price,
  };
  localStorage.setItem("coke", JSON.stringify(coke));
}

var listProduct = [];

if (localStorage.getItem("friedchicken")) {
  var friedChickenCart = localStorage.getItem("friedchicken");
  var fcCart = JSON.parse(friedChickenCart);
  listProduct.push(fcCart);
}

if (localStorage.getItem("hamburger")) {
  var hamburgercart = localStorage.getItem("hamburger");
  var hbCart = JSON.parse(hamburgercart);
  listProduct.push(hbCart);
}

if (localStorage.getItem("chickennugget")) {
  var chickennuggetcart = localStorage.getItem("chickennugget");
  var cnCart = JSON.parse(chickennuggetcart);
  listProduct.push(cnCart);
}

if (localStorage.getItem("chips")) {
  var chipsCart = localStorage.getItem("chips");
  var chCart = JSON.parse(chipsCart);
  listProduct.push(chCart);
}

if (localStorage.getItem("hotdog")) {
  var hotdogCart = localStorage.getItem("hotdog");
  var hdCart = JSON.parse(hotdogCart);
  listProduct.push(hdCart);
}

if (localStorage.getItem("taco")) {
  var tacoCart = localStorage.getItem("taco");
  var tcCart = JSON.parse(tacoCart);
  listProduct.push(tcCart);
}

if (localStorage.getItem("burrito")) {
  var burritoCart = localStorage.getItem("burrito");
  var btCart = JSON.parse(burritoCart);
  listProduct.push(btCart);
}

if (localStorage.getItem("sandwich")) {
  var sandwichCart = localStorage.getItem("sandwich");
  var swCart = JSON.parse(sandwichCart);
  listProduct.push(swCart);
}

if (localStorage.getItem("corndog")) {
  var corndogCart = localStorage.getItem("corndog");
  var cdCart = JSON.parse(corndogCart);
  listProduct.push(cdCart);
}

if (localStorage.getItem("pizza")) {
  var pizzaCart = localStorage.getItem("pizza");
  var pzCart = JSON.parse(pizzaCart);
  listProduct.push(pzCart);
}

if (localStorage.getItem("kebab")) {
  var kebabCart = localStorage.getItem("kebab");
  var kbCart = JSON.parse(kebabCart);
  listProduct.push(kbCart);
}

if (localStorage.getItem("coke")) {
  var cokeCart = localStorage.getItem("coke");
  var ckCart = JSON.parse(cokeCart);
  listProduct.push(ckCart);
}
document.getElementById("showNumberCart").innerHTML = listProduct.length;