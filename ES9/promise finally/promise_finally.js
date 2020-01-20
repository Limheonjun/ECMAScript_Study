let func1 = (param)=>{
    return new Promise((resolve)=>{
        console.log(param);
        resolve('성공');
    });
}

let func2 = (param)=>{
    return new Promise((resolve, reject)=>{
        console.log(param);
        reject('실패');
    });
}

let func3 = (param)=>{
    console.log(param);
}

func1('시작')
.then(func3)
.finally(()=>{console.log('무조건 실행');});
/*
시작
성공
무조건 실행
*/


func2('시작')
.then(func3)
.finally(()=>{console.log('무조건 실행');});
/*
시작
무조건 실행
(node:2696) UnhandledPromiseRejectionWarning: 실패
(node:2696) UnhandledPromiseRejectionWarning: Unhandled promise rejection.
*/