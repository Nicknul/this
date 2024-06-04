const fs = require('fs');
const a = '한국전력공사_지역별 전기차 충전기 현황정보_20221231.csv';

let b = [];

let c = fs.readFileSync(a, 'utf-8');
// console.log(c);

let d = b.push(c);
// console.log(b);

let e = c.split('/r/n');
console.log(e[0]);

// fs.writeFileSync('./a.json', c, 'utf-8');
