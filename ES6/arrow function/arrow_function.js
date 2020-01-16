let func = ()=>{
    console.log('hello');
}

let func2 = (param)=>{
    console.log('hello '+param);
}

func(); // hello
func2("wolrd"); // hello world



let func3 = function(){
    // func3의 생성자는 this를 자신의 인스턴스로 정의
    console.log(this); // func3 {}
};
let k = new func3();

let func4 = function(){
    // setTimeout의 arrow function은 this객체를 생성하지 않기 때문에
    // func4가 this객체가 됨
    setTimeout(()=>{console.log(this)}, 1000); // func4 {}
};
let i = new func4();