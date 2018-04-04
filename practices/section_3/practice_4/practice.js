var findcommon = require("../../section_2/practice_2/practice.js");

var calulate = require("../practice_2/practice.js");


function collect_same_elements(collection_a, object_b) {
var arr = findcommon(collection_a);
   return calulate(arr,object_b);
}

module.exports = collect_same_elements;
