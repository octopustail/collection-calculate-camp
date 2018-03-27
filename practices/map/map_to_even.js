'use strict';

function map_to_even(collection) {
  // ES6
  // var evens = collection.map(x => x*2);
  var evens = collection.map(
    function (value) {
      value = value * 2;
      return value;
    });
  return evens;
}

module.exports = map_to_even;
