// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 15;
  let dogYears = 15;

  if (humanYears == 2) {
    catYears += 9;
    dogYears += 9;
  }
  if (humanYears > 2) {
    catYears += 9 + 4 * (humanYears - 2);
    dogYears += 9 + 5 * (humanYears - 2);
  }

  return [humanYears, catYears, dogYears];
};
