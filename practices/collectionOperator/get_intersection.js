'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_a.concat(collection_b)
                     .filter(function (value, index, arr) {
                           return index !== arr.indexOf(value);})


}

module.exports = get_intersection;
