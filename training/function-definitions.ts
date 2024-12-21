function add1(v1: number, v2: number): number {
  return v1 + v2;
}
const result1 = add1(3, 5);
console.log(`result1 = ${result1}`);

const add2 = function (v1: number, v2: number): number {
  return v1 + v2;
};
console.log(add2);

const result2 = add2(7, 14);
console.log(result2);
console.log(`result2 = ${result2}`);

const add3 = (v1: number, v2: number) => {
  return v1 + v2;
};

const result3 = add3(21, 43);
console.log(`result3 = ${result3}です`);
