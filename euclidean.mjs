function euclidean(number1, number2) {
  while (number2 !== 0) {
    let temp = number2;
    number2 = number1 % number2;
    number1 = temp;
  }

  return number1;
}

console.log(euclidean(78, 66));