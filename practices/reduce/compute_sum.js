'use strict';

function calculate_elements_sum(collection) {
  var sum;
  sum = collection.reduce(function (pre, curr) {
    return pre + curr;
  });
  return sum;
}

module.exports = calculate_elements_sum;

