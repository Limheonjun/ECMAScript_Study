// class 선언
class Person {
    constructor (name){
        this.name = name;
    }

    func(){
        console.log("My name is "+this.name);
    }
}

/* 
Hero클래스의 constructor가 작성되어있지 않기 때문에
슈퍼 클래스(Person)의 constructor가 호출됨
슈퍼클래스의 constructor에서 this는
현재의 인스턴스를 참조하므로
인스턴스의 name 프로퍼티에 따라 
파라미터로 전달받은 값을 설정하고
생성한 인스턴스를 lion에 할당

*/
class Hero extends Person {
    func(){
        super.func();
        console.log(this.name+" is Hero");
    }
}

let hero = new Hero("HJ");
hero.func();