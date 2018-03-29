'use strict';

var reducer = function (pre,cur) {
  return  cur > pre ? cur : pre;
};

function collect_max_number(collection) {
 return collection.reduce(reducer);
}

module.exports = collect_max_number;
