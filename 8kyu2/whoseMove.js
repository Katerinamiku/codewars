// https://www.codewars.com/kata/59126992f9f87fd31600009b/train/javascript
function whoseMove(lastPlayer, win) {
  if (
    (lastPlayer == "black" && win == true) ||
    (lastPlayer == "white" && win == false)
  ) {
    return "black";
  } else {
    return "white";
  }
}
