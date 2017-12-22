/**
 * 
 * @param {any} name 
 */
function Person(name){
    this.name=name;
}

console.log(Person.constructor)
console.log(Person.__proto__)