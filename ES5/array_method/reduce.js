var arr1 = [1,2,3,4];
var arr2 = arr1.reduce(function(accum, currVal, currIdx, arr){
    console.log(accum, currVal);
    return accum+currVal;
});

console.log(arr2); // 10