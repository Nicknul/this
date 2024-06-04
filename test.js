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

// todo-3 문자열에서 '지역'에 해당되는 단어만 추출
let add = {
  city: city,
  value: value,
};
zero.forEach((index) => {
  add.push(index.split(','));
  // for (let element in a) {
  //   add.push(a[element]);
  //   console.log(a[element]);
  // }
});
console.log(add);

// todo-4 생성할 파일 안에 값을 추출한 데이터 넣기
let b = JSON.stringify(add, null, 2);

let a = fs.writeFileSync('./test-1.json', b, 'utf-8');
console.log(a);
