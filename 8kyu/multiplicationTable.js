// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript
function multiTable(number) {
  var answer = "";
  for (let i = 1; i <= 10; i++) {
    if (i < 10) {
      answer += i + " * " + number + " = " + number * i + "\n";
    }
    if (i == 10) {
      answer += i + " * " + number + " = " + number * i;
    }
  }
  return answer;
}
