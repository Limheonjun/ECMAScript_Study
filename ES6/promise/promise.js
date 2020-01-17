// 실행순서와 상관없이 걸리는 시간에 따라 처리됨(비동기처리)
function print1(){
    setTimeout(()=>{console.log("print1")}, 3000);
}

function print2(){
    setTimeout(()=>{console.log("print2")}, 1000);
}

function print3(){
    setTimeout(()=>{console.log("print3")}, 1000);
}

 print1();
 print2();
 print3();

/*
출력 결과
print2
print3
print1
*/



// 실행 순서에 따라 처리(동기 처리)
function print4(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("print4");
            resolve();
        },3000);
    });
    
}

function print5(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("print5");
            resolve();
        },1000);
    });
}

function print6(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("print6");
            resolve();
        },1000);
    });
}

print4()
.then(print5)
.then(print6);

/*
출력 결과
print4
print5
print6
*/
