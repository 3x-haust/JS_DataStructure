function pow(n, x = 2) {
  return x === 0 ? 1 : n * pow(n, x - 1);
}

console.log(pow(2, 5));