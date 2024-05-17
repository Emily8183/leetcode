//recursion version

var reverse = function (cur, pre) {
  // 这里代入的是current node, 和current node的前一个即pre

  if (!cur) return pre;

  let temp = cur.next;
  cur.next = pre;
  pre = cur;
  return reverse(temp, cur);
};

var reverseList = function (head) {
  return reverse(head, null);
};
