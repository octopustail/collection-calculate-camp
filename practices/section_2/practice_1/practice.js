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

module.exports = count_same_elements;
