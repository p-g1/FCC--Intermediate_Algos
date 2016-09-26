function sumFibs(num) {

  var prevNum = 0;
  var currNum = 1;
  var result = 0;

  while (currNum <= num) {
    if (currNum % 2 !== 0) {
      result += currNum;
    }

    var pair = currNum + prevNum;
    prevNum = currNum;
    currNum = pair;
  }

  return result;
}

sumFibs(1000);
