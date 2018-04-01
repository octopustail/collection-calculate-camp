'use strict';

function collect_all_even(collection) {

  return collection.filter(function (value) {
    return value % 2 === 0;
  })//在这里写入代码
}

module.exports = collect_all_even;
