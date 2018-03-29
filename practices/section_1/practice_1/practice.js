function collect_same_elements(collection_a, collection_b) {
  var arr =[];
  for(var i = 0; i < collection_a.length; i++){
    if(collection_b.includes(collection_a[i])){
      arr.push(collection_a[i]);
    }
  }
  return arr;
}

module.exports = collect_same_elements;
