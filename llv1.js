class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head;
    this.tail;
  }

  append(value) {
    const node = new LinkedListNode(value);

    if (this.isHeadExist(node)) {
      return this;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }

  prepend(value) {
    const node = new LinkedListNode(value);

    if (this.isHeadExist(node)) {
      return this;
    } else {
      node.next = this.head;
      this.head = node;
    }

    return this;
  }

  isHeadExist(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return true;
    }
    return false;
  }

  show() {
    let link = this.head;
    while (link) {
      process.stdout.write(`${link.value} ->  `);
      link = link.next;
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(3);
list.show();
