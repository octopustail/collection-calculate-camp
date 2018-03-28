'use strict';

function compute_median(collection) {
  var median,
    position = (collection.length - 1) / 2,
    highpos = Math.ceil(position),
    lowpos = Math.floor(position);

  if (collection.length % 2 === 0) {

    median = (collection[highpos] + collection[lowpos]) / 2;

  } else {

    median = collection[position];

  }
  return median;
}

module.exports = compute_median;


