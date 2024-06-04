const fs = require('fs');

// todo-1 csv 파일 읽기
const data = fs.readFileSync('utf8.csv', 'utf-8');
// console.log(data);

// todo-2 split으로 문자열 뒤 공백 없애기
let zero = data.split('\r\n');
// console.log(zero);
let city = zero[1].split(',');
// console.log(city);

//* zero에 인덱스 번호를 입력해야 거기에 해당되는 자료가 나타남
// let city = zero[0].split(',');
// console.log(city);

// todo-3 forEach로 문자열 모든 값 도출하기
for (let element in zero) {
  let a = zero[element];
  let b = a.split(',');
  let c = b[0];
  console.log(c);
}
