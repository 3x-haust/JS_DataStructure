class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index > this.count || index < 0) throw new Error("범위를 넘어갔습니다.");

    let newNode = new Node(data);

    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }

    this.count++;
  }
}

export { Node, LinkedList }