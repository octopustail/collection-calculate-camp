'use strict';

function get_union(collection_a, collection_b) {
  for(var i = 0; i <= collection_a.length; i++){
    for(var j = 0; j <= collection_b.length; j++){
      if(collection_a[i].indexOf(collection_b[j]) === -1){
         collection_a.push(collection_b[j]);
      }
    }
  }

  return collection_a;//在这里写入代码
}

module.exports = get_union;

