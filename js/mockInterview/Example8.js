setTimeout(function () {
  console.log(`Counted till ${count} after ${count} seconds`);
}, 1000 * i);

//=========================================
for (var i = 1; i <= 5; i++) {
  (function (count) {
    setTimeout(function () {
      console.log(`Counted till ${count} after ${count} seconds`);
    }, 1000 * i);
  })(i);
}
