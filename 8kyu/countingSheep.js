var countSheep = function (num) {
  if (num == 0) {
    return "";
  } else {
    let sheeps = "";
    for (i = 1; i <= num; i++) {
      sheeps += i + " sheep...";
      console.log(sheeps);
    }
    return sheeps;
  }
};
