// https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript
function multipleOfIndex(array) {
  let newArray = [];
  for (i = 0; i <= array.length - 1; i++) {
    if (array[i] % i == 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
