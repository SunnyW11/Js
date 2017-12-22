var count=0;

function addCount(){
  this.count++
}

addCount.count=0;
addCount()
addCount()
addCount()
addCount()
addCount()
addCount()
console.log(count);
console.log(addCount.count);
