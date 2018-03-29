'use strict';

function choose_odds(value) {
  return value % 2 !== 0;
}

function multi_add(value) {
  return value * 3 + 2
}

function hybrid_operation_to_uneven(collection) {
  return collection.filter(choose_odds).map(multi_add)
  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

