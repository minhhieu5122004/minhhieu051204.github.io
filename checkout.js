var listProduct = [];

if(localStorage.getItem("friedchicken")){
var friedChickenCart = localStorage.getItem("friedchicken");
var fcCart = JSON.parse(friedChickenCart);
listProduct.push(fcCart);
}

if(localStorage.getItem("hamburger")){
var hamburgercart = localStorage.getItem("hamburger");
var hbCart = JSON.parse(hamburgercart);
listProduct.push(hbCart);
}

if(localStorage.getItem("chickennugget")){
var chickennuggetcart = localStorage.getItem("chickennugget");
var cnCart = JSON.parse(chickennuggetcart);
listProduct.push(cnCart);
}

if(localStorage.getItem("chips")){
var chipsCart = localStorage.getItem("chips");
var chCart = JSON.parse(chipsCart);
listProduct.push(chCart);
}

if(localStorage.getItem("hotdog")){
var hotdogCart = localStorage.getItem("hotdog");
var hdCart = JSON.parse(hotdogCart);
listProduct.push(hdCart);
}

if(localStorage.getItem("taco")){
var tacoCart = localStorage.getItem("taco");
var tcCart = JSON.parse(tacoCart);
listProduct.push(tcCart);
}

if(localStorage.getItem("burrito")){
var burritoCart = localStorage.getItem("burrito");
var btCart = JSON.parse(burritoCart);
listProduct.push(btCart);
}

if(localStorage.getItem("sandwich")){
var sandwichCart = localStorage.getItem("sandwich");
var swCart = JSON.parse(sandwichCart);
listProduct.push(swCart);
}

if(localStorage.getItem("corndog")){
var corndogCart = localStorage.getItem("corndog");
var cdCart = JSON.parse(corndogCart);
listProduct.push(cdCart);
}

if(localStorage.getItem("pizza")){
var pizzaCart = localStorage.getItem("pizza");
var pzCart = JSON.parse(pizzaCart);
listProduct.push(pzCart);
}

if(localStorage.getItem("kebab")){
var kebabCart = localStorage.getItem("kebab");
var kbCart = JSON.parse(kebabCart);
listProduct.push(kbCart);
}

if(localStorage.getItem("coke")){
var cokeCart = localStorage.getItem("coke");
var ckCart = JSON.parse(cokeCart);
listProduct.push(ckCart);
}

let listProductRender = listProduct.map((user) => {
  return `<tr>
  <td>${user.name}</td>
  <td>${user.number}</td>
  <td>${user.money}</td>
</tr>`
}).join("\n");

let table = document.getElementById("table");
table.innerHTML = `
<thead>
<tr>
  <th>Product</th>
  <th>Quantity</th>
  <th>Price</th>
</tr>
</thead>
${listProductRender}`;

var total = 0;
function totalPrice(listProduct) {
    for (let i = 0; i < listProduct.length; i++) {
        total = total + listProduct[i].money;
        document.getElementById("total-price").innerHTML = total + " VND";
    }
}
totalPrice(listProduct);

function saveInfo() {
    var firstName = document.forms["information"]["first-name"].value;
    var lastName = document.forms["information"]["last-name"].value;
    var phn = document.forms["information"]["phone-number"].value;
    var eml = document.forms["information"]["email"].value;
    var ads = document.forms["information"]["address"].value;
    var promoCode = document.forms["information"]["promo-code"].value;

    var infoCustomer = {
      fname: firstName,
      lname: lastName,
      phone: phn,
      email: eml,
      address: ads,
      promo: promoCode,
    }
    localStorage.setItem("customerinfo", JSON.stringify(infoCustomer));
}
if(localStorage.getItem("customerinfo")) {
  var bill = localStorage.getItem("customerinfo");
  var billInfo = JSON.parse(bill);
  console.log(billInfo)
  document.forms["information"]["first-name"].value = billInfo.fname;
  document.forms["information"]["last-name"].value = billInfo.lname;
  document.forms["information"]["phone-number"].value = billInfo.phone;
  document.forms["information"]["email"].value = billInfo.email;
  document.forms["information"]["address"].value = billInfo.address;
  document.forms["information"]["promo-code"].value = billInfo.promo;
  document.getElementById("gotobill").innerHTML = "Your bill"
}





