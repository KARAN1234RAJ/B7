function score(x) {
  if (score > 49) {
    if (score > 99) {
      console.log("Century!!");
    } else {
      console.log("Half century!!");
    }
  } else {
    if (score == 0) {
      console.log("Duck!");
    } else {
      consoel.log("You played well.");
    }
  }
}

score(12);

score(51);

score(0);

score(113);
