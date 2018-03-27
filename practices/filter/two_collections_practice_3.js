'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    var arr = [];

    for(var i = 0; i < collection_a.length; i++){
      var a = collection_a[i];

      for(var j = 0; j < collection_b.length; j++){
         var b = collection_b[j];

         if( a % b === 0){
            arr.push(a);
            break;
        }

      }

    }

    return arr;//在这里写入代码
}

module.exports = choose_divisible_integer;
