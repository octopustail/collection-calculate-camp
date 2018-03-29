'use strict';
//应该有更好的方法
function find_first_even(collection) {
  var first_even;
  for(var i = 0 ; i < collection.length; i++) {
    if(collection[i] %2 === 0){
      first_even = collection[i];
      break;
    };
  }
  return first_even;
}

module.exports = find_first_even;

