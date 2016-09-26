function unite(arr1, arr2, arr3) {

  for (var n = 0; n < arguments.length; n++) {

  var not = $(arguments[n]).not(arr1).get();
  for (var x = 0; x < not.length; x++) {
    arr1.push(not[x]);
    }
  }

  return arr1;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
