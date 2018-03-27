'use strict';

function choose_multiples_of_three(collection) {
  var arr = [];
  for( var i = 0; i< collection.length; i++){
    if(collection[i] % 3 == 0 ){
      arr.push(collection[i]);
    }
  }

  return arr;//在这里写入代码
  //在这里写入代码
}

module.exports = choose_multiples_of_three;
