// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
function arrayPlusArray(arr1, arr2) {
  var total1 = arr1.reduce(function (a, b) {
    return a + b;
  });
  var total2 = arr2.reduce(function (a, b) {
    return a + b;
  });
  return total1 + total2;
}
