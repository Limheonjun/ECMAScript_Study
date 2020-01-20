let arr = [1, 2, 3, 4, [5, [6, 7, [8]]]];

console.log(arr); 
console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(3));
/*
[ 1, 2, 3, 4, [ 5, [ 6, 7, [Array] ] ] ]
[ 1, 2, 3, 4, 5, [ 6, 7, [ 8 ] ] ]
[ 1, 2, 3, 4, 5, 6, 7, [ 8 ] ]
[ 1, 2, 3, 4, 5, 6, 7, 8 ]
*/

let arr2 = [1, 2, , , , 5];

console.log(arr2);
console.log(arr2.flat());
/*
[ 1, 2, <3 empty items>, 5 ]
[ 1, 2, 5 ]
*/


// flatMap
['abc', 'def'].map((v) => v.split('')); 
['abc', 'def'].map((v) => v.split('')).flat();  
['abc', 'def'].flatMap((v) => v.split('')); 
/*
[['a', 'b', 'c'], ['d', 'e', 'f']]
['a', 'b', 'c', 'd', 'e', 'f']
['a', 'b', 'c', 'd', 'e', 'f']
*/