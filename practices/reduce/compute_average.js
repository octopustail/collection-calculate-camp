'use strict';
var get_sum = function  (array) {
  var sum = 0;
  for(var i =0 ; i < array.length; i++){
    sum = array[i]+sum;
  }
  return sum;
}

function compute_average(collection) {
  var sum = get_sum(collection),
      ave = sum / collection.length.toFixed(1);
  return ave;


}

module.exports = compute_average;

