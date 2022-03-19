// [1]: Symbol Type?
// ES6에서 새롭게 도입된 primitive type.
// Symbol(고유한 값을 가짐.)
// 변경이 불가능한 불변값.

let ar = [1,2,3,4,5];
console.log(ar.length);

ar.length = 50; // ar 배열에 length 속성을 정의하고 50을 할당.
console.log(ar.length) // 덮어 씌워진다.

let ar2 = [1,2,3,4,5];
const length = Symbol('length');
ar2[length] = 50; // ar2배열의 length 속성에 50을 할당

console.log(ar2.length); // 5
console.log(ar2[length]); // 50