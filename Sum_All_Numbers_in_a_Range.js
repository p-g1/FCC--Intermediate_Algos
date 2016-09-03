function sumAll(arr) {
  var newArr= [];

  //find max
 var max = Math.max.apply(null,arr);
 var min = Math.min.apply(null,arr);
  var count = min;
  while (count <= max) {
    newArr.push(count);
    count += 1;
  }

  var total = 0;
  for (var i = 0; i < newArr.length; i++) {
    total += newArr[i];
  }
  return(total);
}

sumAll([5, 10]);
