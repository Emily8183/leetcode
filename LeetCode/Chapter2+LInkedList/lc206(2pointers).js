//双指针，已过

function reverseList(head) {
  if (!head || !head.next) return head;
  // if there's only one node(which is the head) or an empty list, return the head only (or turn the null only. same thing)

  let cur = head;
  let pre = null;
  let temp = null;

  while (cur) {
    temp = cur.next;

    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}
