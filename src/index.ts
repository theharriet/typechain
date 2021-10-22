const sayHi = (name: string, age: number, gender: string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
}

//const sayHi = (name: string, age: number, gender: string): void => {
//    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
//}

sayHi("harriet", 24, "female");

export {};

//sayHi(name, age); 자바스크립트에서 이렇게 돌리면 gender가 undefined뜨는데 타입스크립트에서는
// 미리 알려줌. 컴파일도 안됨

//const sayHi = (name, age, gender?) ==> 이렇게 하면 gender는 넣어도 되고 안넣어도 되는 매개변수