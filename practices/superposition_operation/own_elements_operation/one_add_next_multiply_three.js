'use strict';
var result = [];

function cal_with_neighbor(value, index, arr) {
  if (index == arr.length - 1) {
    return undefined
  }
  result.push((value + arr[index + 1]) * 3);
  return result[index];
}

function one_add_next_multiply_three(collection) {

  collection.map(cal_with_neighbor);
  return result

}

module.exports = one_add_next_multiply_three;
