'use strict';

function choose_no_repeat_number(collection) {
  var arr = []
  for(var i = 0; i < collection.length; i++){
    if(collection.indexOf(collection[i]) === i){
      arr.push(collection[i]);
    }
  }
  return arr;
  //在这里写入代码
}

module.exports = choose_no_repeat_number;
