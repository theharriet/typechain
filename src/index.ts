class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }; 
    //constructor는 메서드인데 클래스가 시작될 때(클래스로부터 객체를 만들때)마다 호출됨
}
//js - public이든 private이든 신경안씀

const lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(lynn));

//interface는 자바스크립트로 컴파일 되지 않음
//인터페이스를 자바스크립에 넣고 싶다면 interface대신 class를 넣어줌
// ts에서의 class는 코드를 컨트롤할수 있도록 해줌 (장점)

//js에서는 class의 property들을 묘사할 필요가 없음 그냥 클래스만들고 속성들은 신경쓰지 않아
//ts에서는 클래스가 어떤 속성들을 가지고 있는지 선언해줘야함


export {};