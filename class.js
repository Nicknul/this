class ItsMe {
  constructor() {
    this.name = '정호연';
    this.age = 27;
    this.home = '대전';
  }
  sentence() {
    return this.name + '입니다.';
  }
}

let itsMe = new ItsMe();

console.log(itsMe);
