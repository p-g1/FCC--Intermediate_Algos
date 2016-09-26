function diff(arr1, arr2) {
  var bigger = [];
  var smaller = [];

  var newArr = $(arr1).not(arr2).get();
  var newerArr = $(arr2).not(arr1).get();

   for (var i = 0; i < newArr.length; i++) {
     newerArr.push(newArr[i]);
   }

  return newerArr;
}
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
