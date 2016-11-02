function convertToRoman(num) {

  var decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var numeral = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

  var copy = num;
  var roman = '';

  while (copy > 0) {

    for (var i = 0; i < decimal.length; i++) {
      if (decimal[i] <= copy && (decimal[i + 1] > copy || i == decimal.length-1)) {
        roman += numeral[i];
        copy -= decimal[i];
      }
    }
  }

  return roman;

}
convertToRoman(1004);
