class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head;
    this.tail;
  }

  append(value) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.createHeadAndTail(node);
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }

  prepend(value) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.createHeadAndTail(node);
    } else {
      node.next = this.head;
      this.head = node;
    }

    return this;
  }

  createHeadAndTail(node) {
    this.head = node;
    this.tail = node;
  }

  reverseRec() {
    const newNode = new LinkedList();
    let node = this.head;

    function rec(node) {
      if (node) rec(node.next);
      if (node?.value) {
        newNode.append(node.value);
      }
    }
    rec(node);

    this.head = newNode.head;
    this.tail = newNode.tail;
  }

  reverseEuristic() {
    const newNode = new LinkedList();
    let node = this.head;

    while (node) {
      newNode.prepend(node.value);
      node = node.next;
    }

    this.head = newNode.head;
    this.tail = newNode.tail;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.tail = this.head;
    this.head = prev;
  }

  delete(number) {
    if (!this.head) return null;

    let node = this.head;

    if (number === this.head.value) {
      this.shift();
      return null;
    }

    while (node) {
      if (number === node.next?.value) {
        node.next = node.next.next;
        if (node.next === null) {
          this.tail = node;
        }
        break;
      }
      node = node.next;
    }
    console.log(this.tail);
  }

  shift() {
    this.head = this.head.next;
  }

  show() {
    let str = "";
    let node = this.head;
    while (node) {
      str += `${node.value}`;

      node = node.next;

      if (node) str += " -> ";
    }
    process.stdout.write(str);
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
// list.prepend(3);
// list.reverse();
list.delete(4);
list.show();
