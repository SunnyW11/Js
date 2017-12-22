function Employee(name,age,salary){
  this.name=name;
  this.age=age;
  this.salary=salary;
}


/* 普通prototype */
// Employee.prototype.getInfo=function(){
  // return{
  //   name:this.name,
  //   age:this.age,
  //   salary:this.salary
  // }
// }


/* 封装过的prototype */
Employee.prototype=function(){
  function getInfo(){
    return{
      name:this.name,
      age:this.age,
      salary:this.salary
    }
  }
  return{
    getInfo:getInfo
  }
}()

var wusonglin=new Employee("wusonglin",25,7500);

console.log(wusonglin.getInfo())
console.log(Employee.prototype.getInfo);




/* 单例模式 */

function Instance(x,y){
  this.x=x;
  this.y=y;
}
var getInstance=(function (){
  var instance=null;
  return function(x,y){
    if(!instance){
      instance =new Instance(x,y);
    }
    instance.x=x;
    instance.y=y;
    return instance;
  }

})()

var a=getInstance(1,2);
var b=getInstance(2,3);

console.log(a,b)