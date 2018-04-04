function shownkey(key, result) {
  for (var j = 0; j < result.length; j++) {
    if (key == result[j].key) {
      return result[j];
    }
  }
}

function count_same_elements(collection) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    var elem = shownkey(collection[i], result)

    if (elem) {
      elem.count++
    } else {
      result.push({"key": collection[i], "count": 1})
    }
  }
  return result

}
function calulate_minus(collection_a, object_b) {
  var arr = object_b.value;

  for (var i = 0; i < collection_a.length; i++) {
    var inx = arr.indexOf(collection_a[i].key);
    if (inx != -1) {
      var minus = Math.floor(collection_a[i].count / 3);
      collection_a[i].count -= minus;
    }
  }
  return collection_a;
}

function create_updated_collection(collection_a, object_b) {
  var arr = count_same_elements(collection_a),
      result = calulate_minus(arr,object_b);
  return result;

}

module.exports = create_updated_collection;
