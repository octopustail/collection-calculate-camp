function create_updated_collection(collection_a, object_b) {
  var arr = object_b.value;

  for (var i = 0; i < collection_a.length; i++) {
    var inx = arr.indexOf(collection_a[i].key);
    if (inx != -1) {

      collection_a[i].count--;
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
