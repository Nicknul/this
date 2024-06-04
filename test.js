const fs = require('fs');

// todo-1 csv 파일 읽기
const data = fs.readFileSync('utf8.csv', 'utf-8');
// console.log(data);

// todo-2 split으로 문자열 뒤 공백 없애기
let zero = data.split('\r\n');
// console.log(zero);
let name = zero[0].split(',');
// console.log(city);

//* zero에 인덱스 번호를 입력해야 거기에 해당되는 자료가 나타남
// let city = zero[0].split(',');
// console.log(city);

// todo-3 문자열에서 '지역'에 해당되는 단어만 추출
for (let i = 1; i < zero.length; i++) {
  let b = zero[i].split(',');
  // console.log(zero[i].split(','));
  let a = {};
  for (let j = 0; j < name.length; j++) {
    // a = { [name[j]]: b[j] };
    a[name[j]] = b[j];
    console.log(a);
  }
}

// let add = [];
// let bbb = '';

// zero.forEach((index,item) => {
//   add.push(index.split(','));
// });
// console.log(add);

// function aaa(a, b) {
//   let local = {};
//   local[a] = a;
//   local[b] = b;
//   return a + b;
// }
// console.log(aaa(1, 2));
// console.log(bbb);
// todo-4 '지역'은 항목 이름, '년도'는 항목 값으로 나오게 하자.

// todo-5 생성할 파일 안에 값을 추출한 데이터 넣기
// let b = JSON.stringify(add, null, 2);

// let a = fs.writeFileSync('./test-1.json', b, 'utf-8');
// console.log(a);
