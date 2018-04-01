'use strict';
var find_even = function (elem, index) {
  return index % 2 !== 0;
};
var cal_median = function (collection) {
  var c_length = collection.length;
  var pos, high, low;
  if (collection.length % 2 === 0) {
    return (collection[c_length / 2] + collection[c_length / 2 - 1]) / 2
  } else {
    return collection[(c_length - 1) / 2];
  }
};
Array.prototype.cal_median = cal_median;
var calculate_median = function (collection) {
  return cal_median(collection.filter(find_even));
};
module.exports = calculate_median;
