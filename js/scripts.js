//Bussiness Logic
function PizzaChoose() {
  this.totalPrice = []
}

PizzaChoose.prototype.thePrice = function (id)
  for (let i=0; )

//UI Logic
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