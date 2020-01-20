console.log(...[1,2,3]); // 1, 2, 3
console.log(...'Hello'); // H e l l o

let func = (a, b, c)=>{
    console.log(a);
    console.log(b);
    console.log(c);
}

let arr = ['one', 'two', 'three'];
func(...arr);
/*
one
two
three
*/