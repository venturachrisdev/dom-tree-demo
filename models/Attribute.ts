import PrintableElement from "./PrintableElement";

export default class Attribute implements PrintableElement {
  
  constructor(protected _name: string, protected _value: any) {}

  value() {
    return this._value;
  }

  name() {
    return this._name;
  }

  setValue(newValue: any) {
    this._value = newValue;
  }

  toString() {
    return `${this._name}=\"${this._value}\"`;
  }
}
