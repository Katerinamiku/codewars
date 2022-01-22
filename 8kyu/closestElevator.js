//https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript

function elevator(left, right, call) {
  if (
    (left == call && right != call) ||
    (left == call - 1 && right == left - 1) ||
    (call == left - 1 && right == left + 1)
  ) {
    elev = "left";
  } else {
    elev = "right";
  }
  return elev;
}

// Alternative solution

function elevator(left, right, call) {
  return Math.abs(call - left) < Math.abs(call - right) ? "left" : "right";
}
