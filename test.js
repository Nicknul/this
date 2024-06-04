const fs = require('fs');
const csvPath = '한국전력공사_지역별 전기차 충전기 현황정보_20221231.csv';

// todo-1 csv 데이터를 담을 빈 배열 생성
let a = [];

// todo-2 csv 파일 읽기
let b = fs.readFileSync(csvPath, 'utf-8');
// console.log(b);

// todo-3 읽은 데이터 빈 배열에 담기;
a.push(b);
// console.log(a);

// todo-4 배열 a를 JSON로 읽기
let d = fs.writeFileSync('./a.json', a, 'utf-8');
console.log(d);
