'use strict';

function find_even(value) {
  return value % 2 === 0;
}

function reducer(pre, cur) {
  return pre + cur;
}

function amount_even(collection) {
  return collection.filter(find_even).reduce(reducer);
  //在这里写入代码
}

module.exports = amount_even;
