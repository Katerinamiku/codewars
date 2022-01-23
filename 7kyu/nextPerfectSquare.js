//  https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
function findNextSquare(sq) {
  let answer;
  if (Number.isInteger(Math.sqrt(sq)) == true) {
    answer = Math.pow(Math.sqrt(sq) + 1, 2);
  } else {
    answer = -1;
  }
  return answer;
}
