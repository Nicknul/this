const fs = require('fs');

// todo-1 csv 파일 읽기
const data = fs.readFileSync('utf8.csv', 'utf-8');
// console.log(data);

//todo-2 data 배열로 변환
const array = [];

array.push(data);
console.log(array);
