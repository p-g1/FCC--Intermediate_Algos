function sumPrimes(num){

  function isPrime(value) {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
     }
  }

  var newArr = [];

  for (var j = 2; j <= num; j++) {
    if (isPrime(j) !== false) {
      newArr.push(j);
      }
    }

  var total = 0;

  for (var x = 0; x < newArr.length; x++) {
    total += newArr[x];
  }
   return total;
  }

sumPrimes(977);
