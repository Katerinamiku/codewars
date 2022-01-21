function warnTheSheep(queue) {
  a = queue;
  if (a[a.length - 1] == "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] == "wolf") {
        let index = a.length - 1 - i;
        return (
          "Oi! Sheep number " + index + "! You are about to be eaten by a wolf!"
        );
      }
    }
  }
}

// Alternative solution
a = queue;
if (a[a.length - 1] == "wolf") {
  return "Pls go away and stop eating my sheep";
} else {
  for (let i = a.length - 1; i <= a.length - 1; i--) {
    if (a[i] == "wolf") {
      let index = a.length - 1 - i;
      return (
        "Oi! Sheep number " + index + "! You are about to be eaten by a wolf!"
      );
    }
  }
}
