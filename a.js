const fs = require('fs');

let c = {
  a: 'json',
  b: 'test',
};

let b = JSON.stringify(c, null, 2);

let a = fs.writeFileSync('./a.json', b, 'utf-8');
console.log(a);
