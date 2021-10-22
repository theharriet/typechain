//alert("hello");

// 어떤 종류의 변수와 데이터 인지 설정을 해줘야함

const name = "harriet",
    age = "24",
    gender = "female";

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}

sayHi(name, age, gender);

export {};

//sayHi(name, age); 자바스크립트에서 이렇게 돌리면 gender가 undefined뜨는데 타입스크립트에서는
// 미리 알려줌. 컴파일도 안됨

//const sayHi = (name, age, gender?) ==> 이렇게 하면 gender는 넣어도 되고 안넣어도 되는 매개변수