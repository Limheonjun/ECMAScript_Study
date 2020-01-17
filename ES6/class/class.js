// class 선언
class Person1 {
    constructor (id, pw){
        this.id = id;
        this.pw = pw;
    }

    func(){
        console.log("id : "+this.id+" & pw : "+this.pw);
    }
}

// class 표현(이름 O)
let person2 = class Person2 {
    constructor (id, pw){
        this.id = id;
        this.pw = pw;
    }

    func(){
        console.log("id : "+this.id+" & pw : "+this.pw);
    }
}

// class 표현(이름 X)
let person3 = class Person3 {
    constructor (id, pw){
        this.id = id;
        this.pw = pw;
    }

    func(){
        console.log("id : "+this.id+" & pw : "+this.pw);
    }
}

let person10 = new Person1(1,2); 
person10.func();// id : 1 & pw : 2

let person11 = new person2(3,4);
person11.func(); // id : 3 & pw : 4

let person12 = new person3(5,6);
person12.func(); // id : 5 & pw : 6 

