// for문을 이용해서 배열의 합 구하기 - 상향식 계산 방법
// let arr = [1, 2, 3, 4, 5];

// function sumArray(arr) {
//   return arr.reduce((sum, n) => sum + n, 0);
// }

// console.log(sumArray(arr));

// for문을 이용해서 배열의 합 구하기 - 하향식 계산 방법

let arr = [1, 2, 3, 4, 5];

function sumArray(arr) {
  return arr[0] + (arr[1] ? sumArray(arr.slice(1)) : 0);
}

console.log(sumArray(arr));