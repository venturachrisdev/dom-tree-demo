import DOMElement from './DOMElement';
import Node from './Node';
import PrintableElement from './PrintableElement';

type DOMOptions = {
  parent: Node;
  attrs: any;
}

export default class DOM extends Node implements PrintableElement {

  _children: DOMElement[];

  constructor() {
    super(null, null);
  }

  createElement(name: string, options: DOMOptions): DOMElement {
    const elem = new DOMElement(name, null, options.parent, null);
    const attrs = options.attrs;
    if (attrs) {
      Object.keys(attrs).forEach((key) => {
        const value = attrs[key];
        elem.addAttribute(key, value);
      })
    }
    return elem;
  }

  findElementById(id: string) {
    let found = this.findElementInTreeById(this, id);

    return found;
  }

  findElementInTreeById(parent: Node, id: string) {
    let found;
    for (const element of parent.getChildren()) {
      const domEl = (<DOMElement>element);
      console.log(domEl);
      if (domEl.getAttribute("id") === id) {
        found = element;
      } else {
        found = this.findElementInTreeById(domEl, id);
      }
    }
    return found;
  }

  toString() {
    let str: string = '';
    for (const element of this._children) {
      str += `${element.toString()}\n`;
    }
    return str;
  }
}