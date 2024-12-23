function add4(v1: number, v2: number) {
  return v1 + v2;
}
console.log(add3(25, 75));
function calculate2(
  v1: number,
  v2: number,
  callback: (a: number, b: number) => number
): number {
  return callback(v1, v2);
}

console.log(calculate2(6, 8, add3));

function multypul(v1: number, v2: number) {
  return v1 * v2;
}

console.log(multypul(7, 7));

function multiplyCalc(
  v1: number,
  v2: number,
  callback: (a: number, b: number) => number
): number {
  return callback(v1, v2);
}

console.log(multiplyCalc(4, 9, add3));

// function GoodMornig(): string {
//   console.log("Good Morning");
//   return "Good Morning";
// }
// function Hello(): string {
//   console.log("Hello");
//   return "Hello";
// }
// function GoodEvening(): string {
//   console.log("GoodEvening");
//   return "Good Evening";
// }

// setTimeout(() => {
//   GoodMornig();
// }, 1000);

// setTimeout(() => {
//   Hello();
// }, 3000);

// setTimeout(() => {
//   GoodEvening();
// }, 5000);

function Greeting(message: string): string {
  console.log(message);
  return message;
}

setTimeout(() => Greeting("Good Morning"), 1000);
setTimeout(() => Greeting("Hello"), 3000);
setTimeout(() => Greeting("Good Evening"), 5000);
