// set 사용법
// 생성 new
// 추가 add
// 삭제 delete

//생성
let ar3 = new Set();

//추가
ar3.add('A');
ar3.add('B');
ar3.add('C');
ar3.add('C');
ar3.add('A');
console.log(ar3)

//사이즈
console.log(ar3.size)

//삭제
ar3.delete('C')
console.log(ar3)

//삭제 --> 한꺼번에 모두 삭제 --> clear()
ar3.clear();
console.log(ar3)

//[1] : 생성시 값을 추가하는 방법
//let ar = new Set().add('X').add('Y');
//console.log(ar)

//[2] : 출력 --> Spread 연산자 사용 -> Iterable 객체의 요소를 하나씩 분리하여 전개 --> 펼침 연산자
let testArr = ['k', 'o', 'r', 'e', 'a'];

console.log(...testArr)
console.log([...testArr]);
console.log([...'hello']);

//console.log(...ar);
//console.log([...ar]);

let ar = [...'abcde']

console.log(ar)

// for 반복문
for(let i=0 ; i<ar.length; i++){
    console.log(ar[i]);
}
console.log('---------------------------');

// forEach() 반복
ar.forEach(function(x){
    console.log(x);
})

console.log('--------------------------');

ar.forEach(x => console.log(x));

console.log('--------------------------');

// Set 자료구조의 다양한 메서드 --> keys(), values()

let testSet3 = new Set(['tiger','lion','dog','cat']);

testSet3.add('hippo');

console.log(testSet3[0]) // tiger --> undefined

for(let i of testSet3){ // for in (x) for of(o)
    console.log(i);
}

let arr = [...testSet3];
console.log(arr[0]) // tiger 


// keys() method --> Iterator object returned --> next()

const key_itr = testSet3.keys();

console.log(key_itr.next().value);
console.log(key_itr.next().value);
console.log(key_itr.next().value);
console.log(key_itr.next().value);
console.log(key_itr.next().value);
console.log(key_itr.next().value);

// values() method --> Iterator object returned --> next()

const val_itr = testSet3.values();

console.log(val_itr.next().value);
console.log(val_itr.next().value);
console.log(val_itr.next().value);
console.log(val_itr.next().value);
console.log(val_itr.next().value);
console.log(val_itr.next().value);

//[5]: entries() method (pair)
let testSet5 = new Set();

testSet5.add('hong');
testSet5.add('lee')
testSet5.add('kang')

const entries = testSet5.entries()

for(let i of entries){
    console.log(i);
}

// 삽입 순으로 Set 요소 각각에 대해서 [value, value]
