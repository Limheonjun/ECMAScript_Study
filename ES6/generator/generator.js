function *myGen() {
    const x = yield 1;       // x = 10
    const y = yield (x + 1); // y = 20  
    const z = yield (y + 2); // z = 30
    return x + y + z;
}

const myitr = myGen();
console.log(myitr.next());   // {value:1, done:false}
console.log(myitr.next(10)); // {value:11, done:false}
console.log(myitr.next(20)); // {value:22, done:false}
console.log(myitr.next(30)); // {value:60, done:true}