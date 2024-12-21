const numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(numbers);

numbers.forEach((num, i) => {
  const double = num * 2;
  console.log(`${i}: ${double}`);
});

const names = ["Devin", "Mari", "Dave"];
const teachers = names.map((name, i) => {
  return {
    id: i,
    name: name,
  };
});
console.log(teachers);

const evenIdTeachers = teachers.filter((teacher) => {
  return teacher.id % 2 === 0;
});
console.log(evenIdTeachers);

const oddIdTeachers = teachers.filter((teacher) => teacher.id % 2 === 1);
console.log(oddIdTeachers);

const sum = numbers.reduce((previous, current) => previous + current, 0);
console.log(sum);

const foodPrices = [23, 35, 56, 78, 90];

foodPrices.forEach((foodPrice) => {
  const taxCulc = foodPrice * 1.1;
  const taxCulcSimple = Math.floor(taxCulc);
  console.log(taxCulcSimple);
});
