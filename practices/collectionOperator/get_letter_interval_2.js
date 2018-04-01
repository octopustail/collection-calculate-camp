'use strict';
var number_map_to_word_over_26 = require('../map/number_map_to_word_over_26.js');

function get_letter_interval_2(a, b) {
  var max = a > b ? a : b,
    min = a < b ? a : b,
    str = '',
    arr = [], result;

  for (var i = min; i <= max; i++) {
    arr.push(i);
  }
  result = number_map_to_word_over_26(arr);
  if (a > b) {
    result.reverse();
  }
  return result
}

module.exports = get_letter_interval_2;

