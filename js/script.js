const hexRegex = /[^0-9a-f]$/i;

$(document).ready(function(){

     $('#userinput').keyup(function() {

          let values = '#'+ $(this).val();
          values = values.toLowerCase();

          if (values.length == 1){
               $('#colorBar').css('background-color', '#FFFF00');
               $('#userinput').css('border-bottom', '5px solid #000000');
          } else if (isHex(values.replace('#', '')) && values.length >= 4){
               $('#colorBar').css('background-color', values);
               $('#userinput').css('border-bottom', '5px solid #00FF00');
          } else {
               $('#userinput').css('border-bottom', '5px solid #FF0000');
               $('#colorBar').css('background-color', '#FF0000');
          }
  
      }).keyup();
 
 });

 function isHex(h) {

     for (let i = 0; i < h.length; i++){
          if (h[i].match(hexRegex)){
               return false;
          }
     }

     return true;

 }