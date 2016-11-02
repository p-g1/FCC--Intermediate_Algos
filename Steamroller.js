function steamroller(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  var secArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (var j = 0; j < arr[i].length; j++) {
        if (Array.isArray(arr[i][j])) {
          for (var x = 0; x < arr[i][j].length; x++) {
            if (Array.isArray(arr[i][j][x])) {
              for (var z = 0; z < arr[i][j][x].length; z++) {
                newArr.push(arr[i][j][x][z]);
              }
            }
            else {
            newArr.push(arr[i][j][x]);
            }
          }
        }
        else {
        newArr.push(arr[i][j]);
        }
      }
    }
    else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

steamroller([1, [2], [3, [[4]]]]) ;
