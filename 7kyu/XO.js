function XO(str) {
  let splittedString = string.toLowerCase().split("");
  console.log(splittedString);

  let xes = 0;
  let oes = 0;

  for (let i = 0; i <= splittedString.length; i++) {
    if (splittedString[i] === "x") {
      xes++;
    } else if (splittedString[i] === "o") {
      oes++;
    }
  }
  if (xes === oes) {
    return true;
  } else {
    return false;
  }
}
