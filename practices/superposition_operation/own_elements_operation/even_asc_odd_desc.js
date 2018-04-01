'use strict';
function iseven(elem, index, arr) {
  return elem % 2 === 0 ;
}
function isodd(elem, index, arr) {
  return elem % 2 !== 0 ;
}
var even_asc_odd_desc = function(collection){
 var odd_arr = collection.filter(isodd)
                         .sort(function (a,b) { return b - a });
  var even_arr = collection.filter(iseven)
    .sort(function (a,b) { return a - b });
  return even_arr.concat(odd_arr);
};
module.exports = even_asc_odd_desc;
