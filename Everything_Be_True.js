function every(collection, pre) {
  var result = true;
  // Is everyone being true?
  for(var i = 0; i < collection.length; i++) {
    if(collection[i][pre]) {
    }
    else {
      result = false;
      break;
    }
  }
  return result;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
