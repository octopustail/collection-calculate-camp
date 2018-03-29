'use strict';

function multi_add(value) {
  return  value * 3 + 2
}

function hybrid_operation(collection) {
  return collection.map(multi_add)
            .reduce(function (pre, cur) {
      return pre + cur;
    })
  //在这里写入代码

}

module.exports = hybrid_operation;

