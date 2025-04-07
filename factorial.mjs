// for문을 이용해서 팩토리얼 구하기 - 상향식 계산 방법

// function factorial(number) {
//   let sum = 1;
//   for (; number > 0; number--){
//     sum *= number;
//   }
//   return sum;
// }

// console.log(factorial(5));

// 재귀함수를 이용해서 팩토리얼 구하기 - 하향식 계산 방법

function factorial(number) {
  return number === 1 ? 1 : number * factorial(number - 1);
}

console.log(factorial(5));