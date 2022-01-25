// https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript
function feast(beast, dish) {
  if (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]) {
    return true;
  } else {
    return false;
  }
}
