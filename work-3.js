console.log('밑도 끝도 없는 this:', this);

function workThree(a, b) {
  console.log('함수 안에 있는 this:', this);
  return a + b;
}
console.log(workThree(1, 2));

let itsMe = {
  name: '정호연',
  age: 27,
  home: '대전',
  test: this,
  sentence: function () {
    return this.name + ' 입니다.';
  },
};
console.dir('객체에서 보는 this:', itsMe);

console.log('메서드로 보는 this:', itsMe.sentence());
