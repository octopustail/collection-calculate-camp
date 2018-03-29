function collect_same_elements(collection_a, object_b) {
   var arr_b = object_b.value,
  result = [];

  collection_a.map(function (value) {
    if (arr_b.includes(value.key)) {
      result.push(value.key);
    }
  });
  return result;
}

module.exports = collect_same_elements;
