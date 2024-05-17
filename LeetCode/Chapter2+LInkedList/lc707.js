// 初始化 MyLinkedList 对象。

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

// Initializes the MyLinkedList object.
class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

// Get the value of the indexth node in the linked list. If the index is invalid, return -1.
//思路：1） 创建一个index,if the index <0 or >=链表的长度，返回-1; 2) loop thru the list until the index is reached, return the value of the node at the index.
MyLinkedList.prototype.get = function (index) {
  let dummyHead = new Node(0, this.head);
  let cur = dummyHead;
  if (index < 0 || index >= this.length) return -1;

  while (index-- >= 0) {
    cur = cur.next;
  }
  //如果index=0, while loop不执行，直接return cur.val，所以没有问题！
  return cur.val;
};

//Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val, null); // 创建新节点
  if (!this.head) {
    // 如果链表为空，新节点即是头节点也是尾节点
    this.head = newNode;
    this.tail = newNode;
  } else {
    // 否则，将新节点插入到头部，并更新头节点的 next 指针
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
};

// Append a node of value val as the last element of the linked list.
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val, null); // 将新节点的 next 设为 null
  if (!this.head) {
    this.head = newNode; // 如果链表为空，新节点既是头节点也是尾节点
  } else {
    this.tail.next = newNode; // 否则，将新节点接到尾节点后面
  }
  this.tail = newNode; // 更新尾节点为新节点(注意这里顺序不能反)
  this.length++;
};

// Add a node of value val before the indexth node in the linked list.
// If index equals the length of the linked list, the node will be appended to the end of the linked list.
// If index is greater than the length, the node will not be inserted.
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.length) return null;
  if (index <= 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.length) {
    this.addAtTail(val);
    return;
  }
  // 获取目标节点的上一个的节点
  let dummyHead = new Node(0, this.head);
  let cur = dummyHead;

  while (index) {
    cur = cur.next;
    index--;
  }

  let newNode = new Node(val);
  newNode.next = cur.next;
  cur.next = newNode;

  this.length++;

  return cur.next;
};

// Delete the indexth node in the linked list, if the index is valid.
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.length) return null;

  if (index === 0) {
    this.head = this.head.next;
    if (index === this.length - 1) {
      this.tail = this.head;
    }
    this.length--;
    return;
  }

  let dummyHead = new Node(0, this.head);
  let cur = dummyHead;
  while (index-- > 0) {
    cur = cur.next;
  }

  cur.next = cur.next.next;

  if (cur.next === null) {
    this.tail = cur;
  }

  //   if (index === this.length - 1) {
  //     this.tail = cur;
  //   }
  this.length--;
  return;
};

let myLinkedList = new MyLinkedList();

// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
// myLinkedList.get(1); // return 2
// myLinkedList.deleteAtIndex(1); // now the linked list is 1->3
// myLinkedList.get(1); // return 3

// 测试 getNode 方法

console.log(myLinkedList.addAtHead(1));
console.log(myLinkedList.addAtTail(3));
console.log(myLinkedList.addAtIndex(1, 2));
console.log(myLinkedList.deleteAtIndex(0)); // now the linked list is 2->3
console.log(myLinkedList.get(0));
console.log(myLinkedList.get(1));
console.log(myLinkedList.get(2));
// console.log(myLinkedList.get(2));
// console.log(myLinkedList.get(3));
