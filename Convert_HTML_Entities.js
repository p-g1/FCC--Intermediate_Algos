function convert(str) {
  var newArr = [];
  var newStr = str.split('');
  for (var i = 0; i < newStr.length; i++) {
    if (newStr[i] === '&') {
        newArr.push('&amp;');
        }
    else if (newStr[i] === '>') {
      newArr.push('&gt;');
    }
    else if (newStr[i] === '<') {
      newArr.push('&lt;');
    }
    else if (newStr[i] === '"') {
      newArr.push('&quot;');
    }
    else if (newStr[i] === "'") {
      newArr.push('&apos;');
    }
    else {
      newArr.push(newStr[i]);
    }
  }
  var newestArr = newArr.join();
  newestArr = newestArr.replace(/,/g,'');

  return newestArr;
}

convert("Dolce & Gabbana");
