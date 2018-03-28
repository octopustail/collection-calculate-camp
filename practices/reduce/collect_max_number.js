'use strict';
var rank_asc = require('../../practices/map/rank_asc.js');
function collect_max_number(collection) {

  var arr = rank_asc(collection);
  return arr[0];
}

module.exports = collect_max_number;
