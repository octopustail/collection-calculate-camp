'use strict';

function iseven(elem, index) {
  return index % 2 !== 0;
}

function sum_up(pre, cur) {
  return pre + cur
}

var calculate_average = function (collection) {
  var even_arr = collection.filter(iseven)
  return (even_arr.reduce(sum_up)) / even_arr.length;
};
module.exports = calculate_average;
