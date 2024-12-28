function add4(v1: number, v2: number) {
  return v1 + v2;
}
console.log(add4(25, 75));
function calculate2(
  v1: number,
  v2: number,
  callback: (a: number, b: number) => number
): number {
  return callback(v1, v2);
}

console.log(calculate2(6, 8, add4));

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

console.log(multiplyCalc(4, 9, add4));

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

// function Greeting(message: string): string {
//   console.log(message);
//   return message;
// }

// setTimeout(() => Greeting("Good Morning"), 1000);
// setTimeout(() => Greeting("Hello"), 3000);
// setTimeout(() => Greeting("Good Evening"), 5000);

// function Quatatin(speech: string): string {
//   console.log(speech);
//   return speech;
// }

// setTimeout(() => Quatatin("speech is a mirror of the soul..."));
// setTimeout(() => Quatatin("Though it seems reasonable..."), 2000);
// setTimeout(() => Quatatin("When the centipede was..."), 3000);

// function substraction(v1: number, v2: number): number {
//   return v1 - v2;
// }

// console.log(substraction(321, 231));

// setTimeout(() => {
//   const result = substraction(52, 21);
//   console.log(result);
// }, 7000);

// function subtraction2(v1: number, v2: number): number {
//   return v1 - v2;
// }
// console.log(subtraction2(234, 34));

// setTimeout(() => {
//   const result2 = subtraction2(125, 35);
//   console.log(result2);
// }, 2000);

// function fivekeys(word: string): string {
//   console.log(word);
//   return word;
// }

// setTimeout(() => fivekeys("inductive method"), 8000);
// setTimeout(() => fivekeys("Air Pillars"), 9000);
// setTimeout(() => fivekeys("economy of motion"), 10000);

function multiply(v1: number, v2: number): number {
  return v1 * v2;
}
console.log(multiply(30, 80));

function SelfIntroduction(intro: string): string {
  console.log(intro);
  return intro;
}

setTimeout(() => SelfIntroduction("Hi everyone!"), 2000);
setTimeout(() => SelfIntroduction(`I'm Tod It's nice to be here`), 3000);
setTimeout(() => SelfIntroduction("Thank you very much"), 4000);
