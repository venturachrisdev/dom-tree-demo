import Attribute from './Attribute';
import Node from './Node';
import PrintableElement from './PrintableElement';

export default class DOMElement extends Node implements PrintableElement {

  constructor(protected _name: string,
              protected _children: DOMElement[],
              protected _parent: Node,
              protected _attributes: Attribute[]) {
    super(_children, _parent);
    if (!_attributes) {
      this._attributes = [];
    }
  }

  addAttribute(name: string, value: any) {
    const newAttr = new Attribute(name, value);
    this._attributes.push(newAttr);
  }

  getName() {
    return this._name;
  }
  
  getAttributes() {
    return this._attributes;
  }

  getAttribute(attrName: string) {
    const attr = this._attributes.filter(attr => attr.name() === attrName);
    if (attr && attr.length) {
      return attr[0].value();
    }
  }

  toString() {
    let str = `<${this._name} `;
    for (const attr of this._attributes) {
      str += `${attr.toString()} `;
    }
    str += `>`;

    if (this._children && this._children.length) {
      str += `\n`;
      for (const child of this._children) {
        str += `  ${child.toString()}\n`;
      }
    }
    str += `</${this._name}>`; 

    return str;
  }
}