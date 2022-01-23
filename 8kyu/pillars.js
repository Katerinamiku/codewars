// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript

function pillars(num_pill, dist, width) {
  if (num_pill > 1) {
    answer = (num_pill - 1) * dist * 100 + (num_pill - 2) * width;
  } else {
    answer = 0;
  }
  return answer;
}
