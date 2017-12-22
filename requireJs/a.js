define([
  'b'
], function( b) {
  var add10=function(num1,num2){
    return num1+num2+10;
  }
  
  var adress=b.Ip+":8080";

  return{
    add10:add10,
    adress:adress
  }
});