// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript
function drawStairs(n) {
  if (n == 1) {
    return "I";
  } else {
    let stairs = "I";
    for (i = 0; i < n - 1; i++) {
      stairs += "\n";
      let emptys = " ";
      for (j = 0; j < i; j++) {
        emptys += " ";
      }
      stairs += emptys + "I";
    }
    return stairs;
  }
}
