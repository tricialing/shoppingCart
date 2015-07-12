$(document).ready(function(){
  console.log("working");

  var calcTotalPrice = function(){

    var itemPrices = $('.item-price');
    var itemQuantities = $('.item-qty .quantity');
    var itemLength = itemPrices.length;

    var totalPrice = 0;
    var subTotalItemPrice;

    for (var i = 0; i < itemLength; i++) {
      // select item price
      var itemPrice = Number($(itemPrices[i]).text().replace('$',' '));   
      // console.log("Item Price: ", itemPrice);
      
      //select item qty
      var itemQuantity = itemQuantities[i].value;
      // console.log("QTY: ", itemQuantity);   
      
      //item sub-total
      var subTotalItemPrice = itemPrice * itemQuantity;
      // console.log("Item subtotal : ", subTotalItemPrice);

      //update sub-total
      var itemSubTotalElement = $('.item-sub-total')[i];
      var itemSubTotalObject = $(itemSubTotalElement);
      $(itemSubTotalObject).text('$' + subTotalItemPrice);

      totalPrice += subTotalItemPrice;
    }
      //Update total-price 
      console.log("Total price : ", totalPrice);    
      $('#total-price').text('$' + totalPrice);

  }; // end of calcTotalPrice 


  $('#cal-price-button').click(function(){
    calcTotalPrice();
  });

  $('.cancel').click(function() {
    $(this).parent().parent().remove();
  });

  $('.add-item').click(function() {
    var itemName= $('#new-item-name').val();
    var itemUnitPrice = $('#new-item-price').val();
    var newItem = '<div class="item row col-xs-12"> <p class="item-name col-sm-3">' + itemName + '</p><p class="item-price col-sm-3">' + itemUnitPrice + '</p> <form class="item-qty col-sm-4 form-inline"><div class="input-group"> <label class="input-group-addon">QTY</label> <input class="quantity form-control" type="text"> </div> <button class="cancel btn btn-default">cancel</button> </form> <p class="col-sm-2 item-sub-total">$ - </p> </div>'
    // html += '<div class="item row col-xs-12">'
    // html += ' <p class="item-name col-sm-3">'
    // html +=   itemName
    // html += ' </p>'
    // html += ' <p class="item-price col-sm-3">'
    // html +=     itemUnitPrice
    // html += ' </p>'
    // html += ' <form class="item-qty col-sm-4 form-inline">'
    // html += '   <div class="input-group">'
    // html += '     <label class="input-group-addon">QTY</label>'
    // html += '     <input class="quantity form-control" type="text"> '
    // html += '   </div>'
    // html += '   <button class="cancel btn btn-default">cancel</button>' 
    // html += ' </form>'
    // html += ' <p class="col-sm-2 item-sub-total">'
    // html += '   $ -'
    // html += ' </p>'
    // html += '</div>'
    // var newItem = html;
    $('#shoppingList').prepend(newItem);
    console.log("clicked");
  });




  // $('.cancel').click(function(){
  //   console.log('cancel clicked');
  // });

  $( ".btn" ).click(function( event ) {
  event.preventDefault();
});


});



  

