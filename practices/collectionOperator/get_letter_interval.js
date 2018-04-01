'use strict';

function get_letter_interval(a, b) {
  var max = a > b ? a : b,
    min = a < b ? a : b,
    str = '',
    arr = [];

  for (var i = min; i <= max; i++){
    str = String.fromCharCode(i + 64).toLowerCase();
    arr.push(str);
  }
  if(a > b){
    arr.reverse();
  }
  return arr;
}

module.exports = get_letter_interval;
