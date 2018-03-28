'use strict';
var sortOrder = function(a,b){
  return b - a;
};

var rank_asc = function (collection) {

  return collection.sort(sortOrder);

};

module.exports = rank_asc;
