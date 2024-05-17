/*
思路：
1）设置一个虚拟头结点dummyHead，这样就不需要判断删除的这个数是否为head（如果是head, 需要把head移到下一位也怪烦的）；
2）设置一个current值作为现在的遍历对象，这个遍历对象是一个指针，指向下一个节点；
3）遍历的前提：
a)从虚拟头结点开始，因为需要删除的是current.next；
b)确保遍历时，current.next不为null。Null的话就是到终点了，还遍历啥；
4) 如果current.next的值等于val，则current.next = current.next.next，相当于把current.next踢走了；
如果不等于val，说明可以停止了，current=current.next；
5) 最后！最神奇的地方！return新的head，就可以打印新的链表了；

*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var removeElements = function (head, val) {
  let dummyHead = new ListNode(0, head);
  //值为零，指向head

  let current = dummyHead;

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummyHead.next;
};
