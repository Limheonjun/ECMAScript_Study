let a = Object.entries({ a: 'zerocho', b: ['hello'] }); 
console.log(a);
// [['a', 'zerocho'], ['b', ['hello']]]

let b = Object.fromEntries([['a', 'zerocho'], ['b', ['hello']]]); 
console.log(b);
// { a: 'zerocho', b: ['hello'] }