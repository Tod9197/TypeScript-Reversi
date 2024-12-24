// class Fraction2 {
//   constructor(private _numerator: number, private _denominator: number) {}

//   get numerator() {
//     return this._numerator;
//   }

//   get denominator() {
//     return this._denominator;
//   }
//   getValue(): number {
//     return this._denominator / this._numerator;
//   }
//   toStoring(): string {
//     return `${this._numerator}/${this._denominator}`;
//   }
// }

// const e1 = new Fraction2(5, 15);
// console.log(e1.numerator);
// console.log(e1.denominator);
// console.log(e1.getValue());
// console.log(e1.toStoring());

class Fraction3 {
  numerator: number;
  denominator: number;

  constructor(numertor: number, denominator: number) {
    this.numerator = numertor;
    this.denominator = denominator;
  }

  getValue() {
    return this.numerator / this.denominator;
  }
}

const g1 = new Fraction3(72, 244);
console.log(g1.numerator);
console.log(g1.denominator);
console.log(g1.getValue());

class Fraction4 {
  constructor(private _numerator: number, private _denominator: number) {}

  get numerator() {
    return this._numerator;
  }
  get denominator() {
    return this._denominator;
  }

  toString(): string {
    return `${this._numerator}/${this._denominator}`;
  }
  getVlaue(): number {
    return this._numerator / this._denominator;
  }
}

const k1 = new Fraction4(8, 9);
console.log(k1.numerator);
console.log(k1.denominator);
console.log(k1.toString());
console.log(k1.getVlaue());
