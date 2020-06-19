//UI Logic
$(document).ready(function() {
  $('form#pizzaChoose').submit(function(event) {
    event.preventDefault();
    $("#orderComfirm").show();
    $("input:checkbox[name=theTopping]:checked").each(function() {
      const theToppingMode = $(this).val();
      $('#orderComfirm').append(theToppingMode + "<br>");
    });
    $('#pizzaChoose').hide();
  });
});