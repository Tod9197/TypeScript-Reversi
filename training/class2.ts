class Fraction2 {
  constructor(private _numerator: number, private _denominator: number) {}

  get numerator() {
    return this._numerator;
  }

  get denominator() {
    return this._denominator;
  }
  getValue(): number {
    return this._denominator / this._numerator;
  }
  toStoring(): string {
    return `${this._numerator}/${this._denominator}`;
  }
}

const e1 = new Fraction2(5, 15);
console.log(e1.numerator);
console.log(e1.denominator);
console.log(e1.getValue());
console.log(e1.toStoring());
