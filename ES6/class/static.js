/*

static 메소드는 프로토타입에 연결되지 않고
클래스에 직접 연결되어 있기 때문에
클래스의 인스턴스화 없이 호출되고
클래스의 인스턴스에서는 호출할 수 없음
동일한 클래스 내의 다른 정석 메소드를 호출하는 경우
this를 사용할 수 있음

*/
class Person {
    static func(){
        console.log("Hello");
    }

    static func2(){
        this.func();
        console.log("world");
    }
}

Person.func(); // Hello

Person.func2(); // Hello world

let person = new Person();
person.func(); // TypeError: person.func is not a function

