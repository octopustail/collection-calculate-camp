'use strict';
var reducer = function (pre,cur) {
  return  cur > pre ? pre : cur;
};

function collect_min_number(collection) {
  return collection.reduce(reducer);
}

module.exports = collect_min_number;

