$(document).ready(function(){
  console.log("working");

  var calcTotalPrice = function(){

    var itemPrices = $('.item-price');
    var itemQuantities = $('.item-qty .quantity');
    var itemLength = itemPrices.length;

    var totalPrice = 0;
    var subTotalItemPrices;

    for (var i = 0; i < itemLength; i++) {
      // select item price
      var itemPrice = Number($(itemPrices[i]).text().replace('$',' '));   
      // console.log("Item Price: ", itemPrice);
      
      //select item qty
      var itemQuantity = itemQuantities[i].value;
      // console.log("QTY: ", itemQuantity);   
      
      //item sub-total
      var subTotalItemPrices = itemPrice * itemQuantity;
      // console.log("Item subtotal : ", subTotalItemPrices);

      //update sub-total
      var itemSubTotalElement = $('.item-sub-total')[i];
      var itemSubTotalObject = $(itemSubTotalElement);
      $('.item-sub-total p').html().replace('$'+ subTotalItemPrices.toFixed(2));
      // console.log("Item SubTotal: ", subTotalItemPrices);

      totalPrice += subTotalItemPrices;
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


  // $('.cancel').click(function(){
  //   console.log('cancel clicked');
  // });

  $( ".btn" ).click(function( event ) {
  event.preventDefault();
});


});



  

