const fs = require('fs');

// todo-1 csv 파일 읽기
const data = fs.readFileSync('utf8.csv', 'utf-8');
// console.log(data);

//todo-2 split
let zero = data.split('\r\n');
console.log(zero[1]);

zero.forEach((index, value) => {
  let city = index.split(',');
  console.log(city);
});
