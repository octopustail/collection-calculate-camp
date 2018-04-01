'use strict';

function get_integer_interval_2(a, b) {

  var max = a > b ? a : b,
    min = a < b ? a : b,
    result = [];

  for (var i = min; i <= max; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }
  if (a > b) {
    result.reverse();
  }
  return result;
}

module.exports = get_integer_interval_2;
