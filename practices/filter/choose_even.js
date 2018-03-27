'use strict';

function choose_even(collection) {
  var arr = [];
  for( var i = 0; i< collection.length; i++){
    if(collection[i] % 2 == 0 ){
      arr.push(collection[i]);
    }
  }

  return arr;//在这里写入代码
}

module.exports = choose_even;
