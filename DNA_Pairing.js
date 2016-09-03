function pair(str) {

  var newStr = str.split('');
  var newArr = [];

  for (var i = 0; i < newStr.length; i++) {

    if (newStr[i] == "G") {
      newArr.push(["G","C"]);
    }
    else if (newStr[i] == "C") {
      newArr.push(["C","G"]);
    }

    else if (newStr[i] == "A") {
      newArr.push(["A","T"]);
    }

    else if (newStr[i] == "T") {
      newArr.push(["T","A"]);
    }
  }

  return newArr;
}

pair("GCG");
