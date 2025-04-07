// function hanoi(count, from, temp, to) {
//   if (count === 0) return;
//   hanoi(count - 1, from, to, temp);
//   console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
//   hanoi(count - 1, to, temp, from);
// }

// hanoi(3, 'A', 'B', 'C');

// function p(n) {
//   return n === 1 ? 1 : 2 * p(n - 1) + 1; 
// }

// const hanoi = (n, from, temp, to) => n === 0 ? undefined : (hanoi(n-1, from, to, temp), console.log(`원반 ${n}를 ${from}에서 ${to}로 이동`), hanoi(n-1, temp, from, to));

// hanoi(2, 'A', 'B', 'C');

function p(n) {
  return Math.pow(2, n) - 1;
}

console.log(p(5));