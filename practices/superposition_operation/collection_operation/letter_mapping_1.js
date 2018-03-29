'use strict';

function  find_even(value) {
  if(value % 2 === 0){
    var v_string = (value+64).toString();
    return String.fromCharCode(v_string).toLowerCase();
  }
}

function even_to_letter(collection) {

  return collection.map(find_even).filter(function(item){
    return item !== undefined;
  })
}

module.exports = even_to_letter;
