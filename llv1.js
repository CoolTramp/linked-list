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

  reverse() {
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
    this.tail = node.tail;
  }

  show() {
    let node = this.head;
    while (node) {
      process.stdout.write(`${node.value} ->  `);
      node = node.next;
    }
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
// list.prepend(3);
list.reverse();
list.show();
