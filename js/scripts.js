function pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

function pizzaSize (size, price) {
  this.size = size;
  this.price = price;
}
  
function pizzaTopping (topping, price) {
  this.topping = topping;
  this.price = price;
}

let pizzaSmall = new pizzaSize ("small", 5.00)
let pizzaMedium = new pizzaSize ("Medium", 8.00)
let pizzaLarge = new pizzaSize ("Large", 10.00)
let pizzaXLarge = new pizzaSize ("XLarge", 14.00)




//UI Logic
let myPizza = new pizza;

$(document).ready(function() {
  $('form#pizzaChoose').submit(function(event) {
    event.preventDefault();
    $("#sizeComfirm").show();
    const theSize = $("input:radio[name=theSize]:checked").val();
    $("#sizeComfirm").append(theSize + "<br");

    $("#toppingComfirm").show();
    $("input:checkbox[name=theTopping]:checked").each(function(){
      const theToppingMode = $(this).val();
      $('#toppingComfirm').append(theToppingMode + "<br>");
    });
    $('#pizzaChoose').hide();
  });
});

