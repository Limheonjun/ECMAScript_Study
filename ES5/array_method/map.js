var arr1 = [12,13,14,15];
var arr2 = arr1.map(function(element, index){
    console.log(element, index);
});
/* 출력
12 0
13 1
14 2
15 3
*/ 


var arr3 = arr1.map(function(element, index){
    return element+1;
});
console.log(arr3); // [ 13, 14, 15, 16 ]