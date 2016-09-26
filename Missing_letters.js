function fearNotLetter(str) {

  var splits = str.split('');
  var newStr = [];
  var lostNumber = [];
  var final = '';

  for (var i = 0; i < splits.length; i++) {
    newStr.push(splits[i].charCodeAt());
  }

  for (var j = 0; j < (newStr.length -1); j++) {
    if (newStr[j] != newStr[j+1] - 1) {
      lostNumber.push(newStr[j]+1);
      final = String.fromCharCode(lostNumber);
      break;
  }
    else if (newStr[j] == newStr[j+1] - 1) {
      final = undefined;
    }
  }

  return final;
}


fearNotLetter("cdefh");
