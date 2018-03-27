'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var commonElem = []

  for(var i = 0; i < collection_a.length; i++){
    if(!collection_b.includes(collection_a[i])){
      commonElem.push(collection_a[i]);
    }
  }
  return commonElem;
  //在这里写入代码
}

module.exports = choose_no_common_elements;
