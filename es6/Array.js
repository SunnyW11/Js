/*rest参数
*
*将一个个变量参数序列化为一个数组
*/
function add(...rest){
  var result=0;
  for(var num of rest){
    result+=num;
  }
  return result;
} 

console.info(add(1,5,6));



/* rest参数逆运算 
*
*将数组解构成独立的变量
*/

console.log(...[1,2]);
console.log(Math.max(12,1,15,22,101));
console.log(Math.max(...[10,100,1000]));

let [a,...b]=[1,2,3,3,5]
console.log(a,b);



/*
*函数接收...扩展运算符
*如果是序列话变量  将会被转化为数组、
*反之   则被转化为序列化的变量
*/
var arr=[]
arr.push(...[1,2,3])
console.log(arr);


/*
*Array.form 操作数组
*/

// 类似于map()方法
var arr2=Array.from([1,2,3],(x)=>{return x*2});
console.log(arr2);


/*
*Array.of 将其他变量转化为数组
*/

var arr3=Array.of(1,2,3);
console.log(arr3);


/*
*includes() 查找是否包含某个变量
*/
console.log([1,2,3].includes(4));




