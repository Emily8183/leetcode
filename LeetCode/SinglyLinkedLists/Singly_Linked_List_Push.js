class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    //no head, no tail, an empty list
  }
  push(val) {
    var newNode = new Node(val);
    //create a new node using the value passed to the function
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      //if the list is empty, then the head and tail are the same
    } else {
      this.tail.next = newNode;
      // take the current tail, this tail, take the next property and set that equal to the new node.
      this.tail = newNode;
      //update this tail to point to that new node
    }
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
// list.push("HELLO")
// list.push("GOODBYE")
