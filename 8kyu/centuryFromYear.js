// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
function century(year) {
  let century;
  if (year % 100 == 0) {
    century = year / 100;
  } else {
    century = Math.trunc(year / 100 + 1);
  }
  return century;
}
