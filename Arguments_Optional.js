function add() {

  var x = arguments[0];

  var sum = function sum(n) {
    if (typeof n === 'number') {
      return x + n;
    }
    else {
      return undefined;
    }
    };

  function isInteger(x) {
    return (typeof x === 'number') && (x % 1 === 0);
  }
    if (arguments.length == 2 && isInteger(arguments[0]) === true && isInteger(arguments[1]) === true) {
      return arguments[0] + arguments[1];
    }
    else if (arguments.length < 2 && isInteger(arguments[0]) === true) {
      return sum;
    }
    else {
      return undefined;
    }
  }

add(2)([3]);
