import { log } from "console";

function mul1(v1: number, v2: number): number {
  return v1 * v2;
}

const result1 = mul1(2, 7);
console.log(result1);

function mul2(v1: number, v2: number) {
  return v1 * v2;
}

const result2_1 = mul2(52, 67);
console.log(result2_1);

// const result2_2 = mul2("Good", "Morning");
// console.log(result2_2);

function mul3(v1: any, v2: any) {
  return v1 * v2;
}

const result3_1 = mul3(120, 240);
console.log(result3_1);

const result3_3 = mul3("Good", "Morning");
console.log(result3_3);
