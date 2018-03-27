'use strict';

function get_intersection(collection_a, collection_b) {
  var arr = [];
  for(var i = 0; i <= collection_a.length; i++){
    for(var j = 0; j<= collection_b.length; j++){
      if( collection_a[i].indexOf(collection_b[j] !== -1) ){
         arr.push(collection_a[i]);
         break;
      }
    }
  }
  return arr;//在这里写入代码
}

module.exports = get_intersection;
