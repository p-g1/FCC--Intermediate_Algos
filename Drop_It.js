function drop(arr, func) {

  var length = arr.length;

  for (var i = 0; i < length; i++) {
    if (func(arr[0])) {
      break;
    }
    else {
      arr.shift();
    }
  }
  return arr;

}

drop([1, 2, 3, 4], function(n) {return n > 5; });
