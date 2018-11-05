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
    let found = this.findElementInTree(this, "id", id);

    return found;
  }

  findElementInTree(parent: Node, attr: string, value: string) {
    let found;
    if (parent && parent.hasChildren()) {
      const children = parent.getChildren();
      for (const element of children) {
        if (element instanceof DOMElement) {
          const domEl = <DOMElement> element;
          found = (domEl.getAttribute(attr) === value) ? element : this.findElementInTree(domEl, attr, value);
          if (found) {
            break;
          }
        }
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