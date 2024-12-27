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

// class Fraction3 {
//   numerator: number;
//   denominator: number;

//   constructor(numertor: number, denominator: number) {
//     this.numerator = numertor;
//     this.denominator = denominator;
//   }

//   getValue() {
//     return this.numerator / this.denominator;
//   }
// }

// const g1 = new Fraction3(72, 244);
// console.log(g1.numerator);
// console.log(g1.denominator);
// console.log(g1.getValue());

// class Fraction4 {
//   constructor(private _numerator: number, private _denominator: number) {}

//   get numerator() {
//     return this._numerator;
//   }
//   get denominator() {
//     return this._denominator;
//   }

//   toString(): string {
//     return `${this._numerator}/${this._denominator}`;
//   }
//   getVlaue(): number {
//     return this._numerator / this._denominator;
//   }
// }

// const k1 = new Fraction4(8, 9);
// console.log(k1.numerator);
// console.log(k1.denominator);
// console.log(k1.toString());
// console.log(k1.getVlaue());

class Farction5 {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.denominator = denominator;
    this.numerator = numerator;
  }

  getValue() {
    return this.denominator / this.numerator;
  }
}

const t1 = new Farction5(7, 84);
console.log(t1.numerator);
console.log(t1.denominator);
console.log(t1.getValue());

class Fraction6 {
  private _numerator: number;
  private _denominator: number;

  constructor(numerator: number, denominator: number) {
    this._numerator = numerator;
    this._denominator = denominator;
  }

  get numerator() {
    return this._numerator;
  }
  get denominator() {
    return this._denominator;
  }

  getValue(): number {
    return this.denominator / this.numerator;
  }

  toString(): string {
    return `${this.denominator} ÷ ${this.numerator} = ${this.getValue()}`;
  }
}

const r1 = new Fraction6(4, 32);

console.log(r1.numerator);
console.log(r1.denominator);
console.log(r1.getValue());
console.log(r1.toString());

class Fraction7 {
  constructor(private _numerator: number, private _denominator: number) {}

  get numerator() {
    return this._numerator;
  }
  get denominator() {
    return this._denominator;
  }

  getValue(): number {
    return this.numerator / this.denominator;
  }

  toString(): string {
    return `${this.numerator} ÷ ${this.denominator} = ${this.getValue()}`;
  }
}

const e1 = new Fraction7(5, 10);
console.log(e1.numerator);
console.log(e1.denominator);
console.log(e1.getValue());
console.log(e1.toString());

class Fractio8 {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  getValue(): number {
    return this.denominator / this.numerator;
  }
}

const h1 = new Fractio8(4, 77);
console.log(h1.numerator);
console.log(h1.denominator);
console.log(h1.getValue());

class Fraction9 {
  private _numerator: number;
  private _denominator: number;

  constructor(numerator: number, denominator: number) {
    this._numerator = numerator;
    this._denominator = denominator;
  }

  get numerator() {
    return this._numerator;
  }
  get denominator() {
    return this._denominator;
  }

  getValue(): number {
    return this.denominator / this.numerator;
  }

  toString(): string {
    return `${this.denominator} ÷ ${this.numerator} = ${this.getValue()} `;
  }
}

const q1 = new Fraction9(128, 512);
console.log(q1.numerator);
console.log(q1.denominator);
console.log(q1.getValue());
console.log(q1.toString());
