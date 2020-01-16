var arr1 = [1,2,3,4,5,6,7];
var arr2 = arr1.filter(function(element, index){
    return element>=3;   
});
console.log(arr2); //[ 3, 4, 5, 6, 7 ]

var arr3 = arr1.filter(function(element, index){
    return index>=3;   
});
console.log(arr3); // [ 4, 5, 6, 7 ]


function underFour(element){
    return element<4;
}
var arr4 = arr1.filter(underFour);
console.log(arr4); // [ 1, 2, 3]