 /*global console, alert*/

 /* 

 Boolean
 */
 var
     mainPrice = 450,

     hasDiscount = true;

 if (hasDiscount === true) {

     var mainPrice = 350;

 } else {

     var mainPrice = 450;
 }

 document.getElementById("test").innerHTML = mainPrice;