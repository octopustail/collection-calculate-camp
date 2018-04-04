'use strict';

//没完成

var a = [];

function iseven(elem, index, arr) {
  return index % 2 !== 0;
}
function isshown(elem,index,arr){
  return a.indexOf(elem) == -1
}

// function shown(elem, index, arr) {
//   arr.find()
//   return index === arr.indexOf(elem);
// }

var single_element = function (collection) {
  var arr = collection.filter(iseven);

  for(var i=0;i<arr.length-1;i++) {
    for(var j=i+1;j<arr.length;j++) {
      if(arr[i]==arr[j]&&a.indexOf(arr[i])==-1)  {
        a.push(arr[i]);
      }
    }
  }
  return arr.filter(isshown);
};
module.exports = single_element;
