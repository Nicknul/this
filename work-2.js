class WorkTwo {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  set a(value) {
    if (typeof value === 'number') {
      return (this._a = value);
    } else {
      throw new Error('a는 숫자만 입력만 가능합니다.');
    }
  }
}

let test = new WorkTwo('정호연', 2);
console.log(test);
