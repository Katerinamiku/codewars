// https://www.codewars.com/kata/59fc72fe235f93838b002235/train/javascript
function power(x, y) {
  return x ** y;
}
// alternative
function power(x, y) {
  return Math.pow(x, y);
}

//   alternative
function power(x, y) {
  let answer = x;
  for (let i = 1; i < y; i++) {
    answer *= x;
  }
  return answer;
}
