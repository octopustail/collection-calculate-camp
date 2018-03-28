'use strict';
var rank_desc = require('../../practices/map/rank_desc.js');

function collect_min_number(collection) {
  var arr = rank_desc(collection);
  return arr[0];
}

module.exports = collect_min_number;

