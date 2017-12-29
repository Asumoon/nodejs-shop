function pinCodeCheck() {
  var pinOne = [1, 2, 3 ];
  var pinTwo = [11,22,33,44,55];
  var one = pinOne.length;
  var two = pinTwo.length;
   var m = one + two ;
  var userPin = document.forms["pinform"];
  var finUPin = "";
  var deliveryCharge = "";
 
  finUPin = userPin.pinCode.value;

  for (var j = 0; j < m; j++) {
    if ( finUPin == pinOne[j]) {
      deliveryCharge = "2";
      break;
    }
     else if (finUPin == pinTwo[j]) {
      deliveryCharge = "Free Delivery";
      break;
    } else {
      deliveryCharge = 'Unavaialable'
    }
  }

  document.getElementById('pinCheck').innerHTML = deliveryCharge;
  
}
