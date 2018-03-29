'use strict';
//理应调用已有的降维函数
// var double_to_one = require("../../../../flaten/double_dimensional_array_to_one_1.js");

function collect_same_elements(collection_a, collection_b) {
  var arr_result =[],
      arr_b = Array.prototype.concat.apply([],collection_b);
  // var arr_b = double_to_one(collection_b);
  for(var i = 0; i < collection_a.length; i++){
    if(arr_b.includes(collection_a[i])){
      arr_result.push(collection_a[i]);
    }
  }
  return arr_result;
}

module.exports = collect_same_elements;
