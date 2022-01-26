var uniqueInOrder = function (iterable) {
  var newArr = [];

  if (typeof iterable === "string") {
    iterable = iterable.split("");
  }

  if (iterable.length > 0) {
    var arr = iterable.reduce(function (prev, curr) {
      if (prev !== curr) {
        newArr.push(prev);
      }
      return curr;
    });
    newArr.push(arr);
  }

  return newArr;
};
