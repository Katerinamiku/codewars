//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

function sumOfDifferences(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  let answer = 0;
  if (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      answer = answer + (arr[i] - arr[i + 1]);
    }
  }
  return answer;
}
