export class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  append(value) {
    const node = new LinkedListNode(value);

    if (!this._head) {
      this._createHeadAndTail(node);
    } else {
      this._tail.next = node;
      this._tail = node;
    }
    return this;
  }

  prepend(value) {
    const node = new LinkedListNode(value);

    if (!this._head) {
      this._createHeadAndTail(node);
    } else {
      node.next = this._head;
      this._head = node;
    }

    return this;
  }

  _createHeadAndTail(node) {
    this._head = node;
    this._tail = node;
  }

  reverseEuristic() {
    const newNode = new LinkedList();
    let node = this._head;

    while (node) {
      newNode.prepend(node.value);
      node = node.next;
    }

    this._head = newNode._head;
    this._tail = newNode._tail;
  }

  reverse() {
    let current = this._head;
    let prev = null;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this._tail = this._head;
    this._head = prev;
  }

  delete(value) {
    if (!this._head) return null;

    if (value === this._head.value) {
      this.shift();
      return null;
    }

    let node = this._head;

    while (node.next) {
      if (value === node.next.value) {
        node.next = node.next.next;
        if (!node.next) {
          this._tail = node;
        }
        return;
      }
      node = node.next;
    }
  }

  shift() {
    if (this._head) {
      this._head = this._head.next;
    }
  }

  show() {
    let str = "";
    let node = this._head;
    while (node) {
      str += `${node.value}`;
      node = node.next;
      if (node) str += " -> ";
    }
    process.stdout.write(str);
  }
}
