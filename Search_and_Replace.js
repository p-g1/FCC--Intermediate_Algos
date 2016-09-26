function myReplace(str, before, after) {

  var split = str.split(' ');
  var newSplit = [];
  var newSplit2 = [];
  var after2 = after.substring(0, 1).toUpperCase() + after.substring(1);
  var beforeLet = before.substring(0, 1);

  for (var i = 0; i < split.length; i++) {

    if (split[i] == before) {

      if (beforeLet === beforeLet.toUpperCase()) {
        newSplit = split.splice(i, 1, after2);
        newSplit2 = split.join(' ');
      }

      else {
        newSplit = split.splice(i, 1, after);
        newSplit2 = split.join(' ');
      }
    }
  }

  return newSplit2;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
