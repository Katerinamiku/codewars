//  https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  if (num > 0) {
    answer = num * -1;
  } else if (num == 0) {
    answer = 0;
  } else {
    answer = num;
  }
  return answer;
}
