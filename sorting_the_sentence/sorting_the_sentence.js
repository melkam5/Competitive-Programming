/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(" "),
    n = arr.length;

  var i, j;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j].slice(-1) > arr[j + 1].slice(-1)) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    arr[n - i - 1] = arr[n - i - 1].slice(0, -1);
  }
  return arr.join(" ");
};
