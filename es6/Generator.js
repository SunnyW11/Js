function* hello() {
  yield 'h';
  console.log('11');
  yield 'e';
  yield 'l';
  yield 'l';
  yield 'o';
  return 'ending';
}

var world=hello();
console.log(world.next());
console.log(world.next());
// console.log(world.next());
// console.log(world.next());
// console.log(world.next());
// console.log(world.next());
// console.log(world.next());

