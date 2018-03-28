'use strict';
var sortOrder = function(a,b){
  return a - b;
};

var rank_desc = function(collection){
  return collection.sort(sortOrder);
};

module.exports = rank_desc;
