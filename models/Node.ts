
export default class Node {

  constructor(protected _children: Node[],
    protected _parent: Node) {
    if (_parent) {
      this._parent.addChild(this);
    }
  }

  addChild(child: Node) {
    if (!this._children) {
      this._children = [];
    }
    this._children.push(child);
  }

  hasChildren() {
    return this._children && this._children.length;
  }

  getChildren() {
    return this._children;
  }

  getParent() {
    return this._parent;
  }
}