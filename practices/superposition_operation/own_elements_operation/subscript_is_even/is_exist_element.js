'use strict';

function iseven(elem, index) {
  return index % 2 === 0;
}
var is_exist_element = function(collection,element){
   return collection.filter(iseven).includes(element);
};
module.exports = is_exist_element;
