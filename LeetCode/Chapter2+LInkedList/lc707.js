// 初始化 MyLinkedList 对象。
var MyLinkedList = function () {};

//获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 。
MyLinkedList.prototype.get = function (index) {};

//将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点(头指针）。
MyLinkedList.prototype.addAtHead = function (val) {};

//将一个值为 val 的节点追加到链表的最后一个元素。
MyLinkedList.prototype.addAtTail = function (val) {};

// 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
MyLinkedList.prototype.addAtIndex = function (index, val) {};

// 如果下标有效，则删除链表中下标为 index 的节点。
MyLinkedList.prototype.deleteAtIndex = function (index) {};
