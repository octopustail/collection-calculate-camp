'use strict';
var map_to_three_multiples = function(collections){
  var result = collections.map(
    function (value) {
      value = value * 3;
      return value;
    });
  return result;
};

module.exports = map_to_three_multiples;
