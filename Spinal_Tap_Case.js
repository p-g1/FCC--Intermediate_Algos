function spinalCase(str) {
  var newArr = str.split('');
  var newArr2 = [];

  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] === " " || newArr[i] === "_") {
      newArr2.push(newArr[i]);
    }
  }
    if (newArr2.length === 0) {
      str = str.split(/(?=[A-Z])/).join(" ");
    }

  str = str.replace(/ |_/g, '-');
  str = str.toLowerCase();


  return str;
}

spinalCase('The_Andy_Griffith_Show');
