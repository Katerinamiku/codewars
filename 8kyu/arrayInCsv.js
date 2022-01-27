// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript
function toCsvText(array) {
  let csvContent =
    "array:text/csv;charset=utf-8," + array.map((e) => e.join(",")).join("\n");
  var csv = array
    .map(function (d) {
      return JSON.stringify(d);
    })
    .join("\n")
    .replace(/(^\[)|(\]$)/gm, "");
  return csv;
}
