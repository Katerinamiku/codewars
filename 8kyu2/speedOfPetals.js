// https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/train/javascript
function sakuraFall(v) {
  if (v > 0) {
    return (time = 400 / v);
  } else {
    return 0;
  }
}
//  alternative
function sakuraFall(v) {
  return v > 0 ? 400 / v : 0;
}
