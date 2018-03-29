'use strict';

function median_to_letter(collection) {
  var median, n, str = '',
    position = (collection.length - 1) / 2,
    highpos = Math.ceil(position),
    lowpos = Math.floor(position);

  if (collection.length % 2 === 0) {

    median = (collection[highpos] + collection[lowpos]) / 2;

  } else {

    median = collection[position];

  }
  median = Math.ceil(median);


  while (median > 0) {
    n = median % 26;
    if (n === 0) {
      n = 26;
    }
    str = String.fromCharCode(n + 64) + str;
    median = (median - n) / 26;

  }
  return str.toLowerCase();
}

module.exports = median_to_letter;
