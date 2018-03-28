'use strict';
var compute_median = require('../../practices/reduce/compute_median.js');

function compute_chain_median(chain) {
  var arr = chain.split("->");
  for(var i = 0; i< arr.length; i++){
    arr[i] = parseInt(arr[i])
  }
  console.log('arr',arr);
  var result = compute_median(arr);
  return result;
}

module.exports = compute_chain_median;
