// https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
function oddCount(n) {
  let num = 0;
  for (let i = 1; i < n; i += 2) {
    num++;
  }
  return num;
}

//   alternative
function oddCount(n) {
  return Math.floor(n / 2);
}
