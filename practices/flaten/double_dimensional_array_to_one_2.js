'use strict';

function double_to_one(collection) {
  //降维应该抽成一个单独的函数
  var arr = Array.prototype.concat.apply([], collection);
  var result = [];
  for (var i = 0; i < arr.length; i++) {

    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = double_to_one;
