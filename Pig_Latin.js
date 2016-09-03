function translate(str) {
  var result = '';

  if (/[aeiou]/.test(str[0])) {
     result = str + 'way';

  } else if (/[aeiou]/.test(str[1])) {

     var backEnd2 = str.substring(1);
     var letter = str.substring(0, 1);

     result = backEnd2 + letter + 'ay';

  } else {

     var backEnd = str.substring(2);
     var letters = str.substring(0, 2);

     result = backEnd + letters + 'ay';
  }

  return result;
}

translate("gated");
