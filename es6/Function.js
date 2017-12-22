/*
*Object.assign()  对象合并  
*该方法属于对象的浅拷贝  
*/
var target={ a:1},source1={b:2},source2={c:3};
var ss=Object.assign(target,source1,source2);  //第一个参数为合并后的目标参数
console.log(target);
console.log(ss);
console.log(ss===target);

var result=Object.assign({},target,source1,source2);  //也可以设置一个空对象
console.log(result);

//同名属性会被覆盖
var a={x:1};
var b={x:0};
var result1=Object.assign({},a,b);
console.log(result1);

//为属性指定默认值
var defaultOption={
  url:'www.baidu.com',
  method:'POST'
}
function ajax(option){
  option=Object.assign({},defaultOption,option);
  console.log(option)
}
console.log(ajax());
console.log(ajax({url:'www.qq.com'}));


/**
 * 对象转化为数组
 * Object.keys()  获取的是key
 * Object.values()  获取的是value  es7
 * Object.entries()  获取的是key:value 
 */
console.log(Object.keys(defaultOption)); 
//console.log(Object.values(defaultOption));

