'use strict';

function get_integer_interval(a, b) {
  var max = a > b ? a : b,
      min = a < b ? a : b,
      arr = [];

  for (var i = min; i <= max; i++) {
    arr.push(i);
  }
  if (a > b) {
    arr.reverse();
  }

  return arr
}

module.exports = get_integer_interval;

