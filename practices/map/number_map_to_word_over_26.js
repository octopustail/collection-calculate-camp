'use strict';
var number_map_to_word_over_26 = function(collection){
  var arr = [];
  for(var i = 0; i < collection.length; i++){
    var num = collection[i];
    var str = "";

    while(num > 0){
      var n = num % 26;
      if(n == 0){
        n = 26;
      }
      str = String.fromCharCode( n + 64 ) + str;
      num = (num - n) / 26;

    }
    str = str.toLowerCase();
    arr.push(str);
  }
  return arr;
};

module.exports = number_map_to_word_over_26;
