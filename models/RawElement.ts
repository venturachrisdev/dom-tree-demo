import PrintableElement from './PrintableElement';
import Node from './Node';

export default class RawElement extends Node implements PrintableElement {

  constructor(private _value: any) {
    super(null, null);
  }

  value(newValue: any) {
    this._value = newValue;
  }

  getValue() {
    return this._value;
  }

  toString() {
    return this._value;
  }
}