// [4] 1. Symbol은 Symbol()함수를 이용하여 생성.

let symbol = Symbol();

// [4] 2. parameter로 문자열을 넣어서 생성할 수 있고 용도는 단순 디버깅 용도이다.
let symbol2 = Symbol('personName');
let symbol3 = Symbol('personName');

console.log(symbol2 === symbol3) // false

console.log(symbol2)

// [5] 심볼형은 for .. in 구문으로 반복시 출력되지 않는다.

let ar6 = [1,2,3,4,5];
ar6.someProperty = 10;

for(let i in ar6){
    console.log(i); // 0,1,2,3,4,someProperty
}

let ar6_ = [1,2,3,4,5];
let someProperty = Symbol('someProperty');

ar6_[someProperty] = 10;

for(let i in ar6_){
    console.log(i); // 0,1,2,3,4
}