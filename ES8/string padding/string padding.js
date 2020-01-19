let str = 'STRING';

console.log(str.padStart(5));
console.log(str.padStart(7));
console.log(str.padStart(10));

console.log(str.padStart(7, '*'));

console.log(str.padEnd(7, '*'));
/*
STRING
 STRING
    STRING
*STRING
STRING*
*/