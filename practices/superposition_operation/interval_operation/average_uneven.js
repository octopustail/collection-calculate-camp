'use strict';

function find_odd(value) {
  return value % 2 !== 0;
}

function sum_up(pre, cur) {
  return pre + cur
}

function average_uneven(collection) {
  var arr = collection.filter(find_odd);
  return (arr.reduce(sum_up)) / arr.length;
  //在这里写入代码
}

module.exports = average_uneven;
