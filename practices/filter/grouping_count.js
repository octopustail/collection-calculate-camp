'use strict';

function grouping_count(collection) {
  var freq = {};

  for(var i = 0; i < collection.length; i++){
    var temp = collection[i];

    if(freq[temp] == undefined){
      freq[temp] =1;
    }else{
      freq[temp]++;
    }
  }

  return freq;
}

module.exports = grouping_count;
