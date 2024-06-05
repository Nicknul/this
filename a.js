const fs = require('fs');

// todo-1 csv 파일 읽기
const data = fs.readFileSync('utf8.csv', 'utf-8');
// console.log(data);

//todo-2 data 배열로 변환
// const array = [];

// array.push(data);
// console.log(array);

// todo-3 split를 이용하여 불 필요한 문자 지우기
const splitData = data.split('\r\n');
console.log(splitData);
