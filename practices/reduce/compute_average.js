'use strict';

function compute_average(collection) {

  var sum, ave;
  sum = collection.reduce(function (pre, curr) {
    return pre + curr;
  });

  ave = sum / collection.length.toFixed(1);
  return ave;


}

module.exports = compute_average;

