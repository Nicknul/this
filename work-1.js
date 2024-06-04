function workOne(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    let local = a + b;
    return local;
  } else {
    console.error('매개변수의 값이 숫자가 아님');
  }
}
