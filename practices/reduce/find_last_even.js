'use strict';

function find_last_even(collection) {
  return collection.reduce(function (pre,cur) {
    return cur % 2 === 0 ? cur : pre;
  })//在这里写入代码
}

module.exports = find_last_even;
