'use strict';

function get_integer_interval(number_a, number_b) {
  var max;
  var min;
  var arr = [];
  if (number_a < number_b){
    max = number_b;
    min = number_a;
  }else{
    max = number_a;
    min = number_b;
  }//在这里写入代码
  for(var i = min;i<=max;i++)
  arr.push(i);
}

module.exports = get_integer_interval;

