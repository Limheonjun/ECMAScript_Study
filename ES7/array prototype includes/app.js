let num = [1,2,3,4, NaN];
 
// indexOf
if(num.indexOf(3) >= 0){
    console.log(true)
}
 
// includes
if(arr.includes(3)){
    console.log(true)
}
 
// indexOf는 NaN을 찾을 수 없음
num.includes(NaN) // true
num.indexOf(NaN) //-1