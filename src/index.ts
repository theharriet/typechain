interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "harriet",
    age: 24,
    gender: "female"
}

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}
//그럼 이제 person이 human interface랑 같은 구조인지 체크할거야 타입스크립트가 

// const sayHi = (name: string, age: number, gender: string): string => {
//     return `Hello ${name}, you are ${age}, you are a ${gender}`;
// }

//const sayHi = (name: string, age: number, gender: string): void => {
//    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
//}

//sayHi("harriet", 24, "female");
//console.log(sayHi(person)); 이렇게 하면 안돼 sayHi()는 3개의 argument를 예상하고 있기에
// object로 전달하면 가능 --> interface해보자

//이런식으로 interface를 사용해서 object를 사용하면
// 블록체인의 경우 하나의 블록을 interface로 할 수 있음




export {};