function shownkey(key, result) {
  for (var j = 0; j < result.length; j++) {
    if (key == result[j].name) {
      return result[j];
    }
  }
}

function conbinecommon(result) {
  for (var i = 0; i < result.length - 1; i++) {
    for (var j = 0; j < result.length; j++) {
      console.log('i', result[i], 'j', result[j])
      if (result[i].name == result[j].name) {
        console.log(result[i], 'i', result[j], 'j')
        result[j].summary = result[j].summary + result[i].summary;
        result.splice(i, 1);
      }
    }
  }
  return result
}

function count_same_elements(collection) {
  var result = [];

  for (var i = 0; i < collection.length; i++) {
    var exist_brackets = collection[i].indexOf('[') != -1,
      exist_dash = collection[i].indexOf('-') != -1,
      exist_quotmark = collection[i].indexOf(':') != -1
    if (exist_brackets || exist_dash || exist_quotmark) {

      if (exist_dash) {
        collection[i] = collection[i].split("-")
      }
      ;
      if (exist_quotmark) {
        collection[i] = collection[i].split(":")
      }
      if (exist_brackets) {
        collection[i] = collection[i].split("[")
      }
      collection[i][1] = parseInt(collection[i][1]);
      var elem = shownkey(collection[i][0], result);
      if (elem) {
        elem.summary += collection[i][1];
      } else {
        result.push({"name": collection[i][0], "summary": collection[i][1]})
      }


    } else {
      var elem = shownkey(collection[i], result)

      if (elem) {
        elem.summary++
      } else {
        result.push({"name": collection[i], "summary": 1})
      }
    }


  }
  return result;
}

module.exports = count_same_elements;
