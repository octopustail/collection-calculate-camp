'use strict';

function average_to_letter(collection) {
  var sum, ave;

  sum = collection.reduce(function (pre, cur) {
    return pre + cur;
  });
  ave = Math.ceil((sum / collection.length));
  return String.fromCharCode(ave + 64).toLowerCase();

  //在这里写入代码
}

module.exports = average_to_letter;

