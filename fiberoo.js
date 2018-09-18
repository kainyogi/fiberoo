function fib(){
  let a = 0;
  let b = 1;
  let c = 0;
  let list = [];
  list.push(a);
  list.push(b);
  for(let i = 0; i < 98; i++) {
    c = a + b;
    list.push(c);
    a = b;
    b = c;
  }
  return list;
}
console.log(fib());

function numsToString(list){
  return _.map(list, num => '${num}')
}

console.log(numsToString(fib()));

function numEvenNums(list){
  return _.filter(list, num => ((num % 2) === 0)).length;
}

console.log(numEvenNums(fib()));