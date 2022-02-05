// https://www.codewars.com/kata/619f200fd0ff91000eaf4a08/train/javascript
function oddOrEven(n) {
  let sum = 0;
  if (Number.isInteger(n / 2)) {
    if ((n / 2) % 2 == 0) {
      return "Even";
    } else if ((n / 2) % 2 != 0) {
      return "Odd";
    }
  } else {
    return "Either";
  }
}
