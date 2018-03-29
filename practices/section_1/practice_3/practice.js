//只是从对象b中将数组取出来了
//不是很优雅的解决方法

function collect_same_elements(collection_a, object_b) {
  var arr = [];
  var arr_b = object_b.value;
  for (var i = 0; i < collection_a.length; i++) {
    if (arr_b.includes(collection_a[i])) {
      arr.push(collection_a[i]);
    }
  }
  return arr;
}

module.exports = collect_same_elements;
