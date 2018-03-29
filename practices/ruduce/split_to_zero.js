'use strict';

function spilt_to_zero(number, interval) {
  var arr = [];
  arr[0] = number;
  while(number > 0){
    number = ( number * 10 - interval * 10 ) / 10;
    arr.push(number)
  }
  return arr;
}

module.exports = spilt_to_zero;
