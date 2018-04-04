'use strict';

function rank_by_two_large_one_small(collection) {
  var arr = collection.sort(function (a, b) {
    return a - b
  });
  for (var i = 2; i < arr.length; i = i + 3) {
    var temp = arr[i - 2];
    arr[i - 2] = arr[i - 1];
    arr[i - 1] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

module.exports = rank_by_two_large_one_small;
