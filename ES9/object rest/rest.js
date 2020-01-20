let func = (a, ...rest)=>{
    console.log(a);
    rest.forEach(value=>{
        console.log(value);
    });
}

let func2 = (a, b, c, ...rest)=>{
    console.log(a);
    rest.forEach(value=>{
        console.log(value);
    });
}
func('REST1', 1,2,3);
/*
REST1
1
2
3
*/
func('REST2', [1,2,3]);
/*
REST2
[1,2,3]
*/
func('REST3', 1,2,3,4,5,6);
/*
REST3
1
2
3
4
5
6
*/

console.log("length1 : "+func.length); // 1
console.log("length2 : "+func2.length); // 3