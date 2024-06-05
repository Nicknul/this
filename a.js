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
// console.log(splitData);

// todo-4 split한 data 배열의 값을 하나씩 나오게 하자
// const city = splitData[0].split(',');
// console.log(city);
for (let i = 0; i < splitData.length; i++) {
  // console.log(splitData[i]);
}

// todo-5 배열 값 안에 있는 또 다른 값을 가져오자
for (let i = 0; i < splitData.length; i++) {
  console.log(splitData[i].split(','));
}
