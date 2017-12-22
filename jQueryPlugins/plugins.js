$.fn.extend({
  minValue:function(a,b){
    return a>b?b:a
  },
  maxValue:function(a,b){
    return a>b?a:b
  }
});


console.log($().minValue(1,5))
console.log($().minValue(10,5))
console.log($().maxValue(2,5))
console.log($().maxValue(10,5))