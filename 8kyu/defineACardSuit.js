// https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript
function defineSuit(card) {
  let answer;
  if (card[card.length - 1] == "♣") {
    answer = "clubs";
  } else if (card[card.length - 1] == "♦") {
    answer = "diamonds";
  } else if (card[card.length - 1] == "♥") {
    answer = "hearts";
  } else if (card[card.length - 1] == "♠") {
    answer = "spades";
  }
  return answer;
}
