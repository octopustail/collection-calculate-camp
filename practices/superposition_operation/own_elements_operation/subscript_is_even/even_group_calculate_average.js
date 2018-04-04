//没有完成
'use strict';
var isevens = function (elem, index) {
  return index % 2 != 0 && elem % 2 == 0
};
var existKey = function (key, group) {
  for (var i = 0; i < group.length; i++) {
    if (key == group[i].key) {
      return group[i];
    }
  }

}

var even_group_calculate_average = function (collection) {
  var arr = collection.filter(isevens);
  var group = [],
    result = [];
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    var count = 0
    while (num) {
      num = parseInt(num / 10);
      count++
    }
    var elem = existKey(count, group);
    if (elem) {
      elem.total += arr[i];
      elem.count++
    } else {
      group.push({"key": count, "total": arr[i], "count": 1});
    }
  }
  if (group.length == 0) {
    result.push(0);
  } else {
    for (var i = 0; i < group.length; i++) {
      var ave = group[i].total / group[i].count
      result.push(ave)
    }
  }
  result = result.sort(function (a, b) {
    return a - b
  });
  return result;
};
module.exports = even_group_calculate_average;
