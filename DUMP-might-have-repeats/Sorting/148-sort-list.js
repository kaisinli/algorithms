var sortList = function (head) {
    if(head === null || head.next === null) return head;

    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let l1 = head;
    let l2 = slow.next;

    slow.next = null;

    return mergeTwoSortedLists(
        sortList(l1),
        sortList(l2)
    )
};

const mergeTwoSortedLists = function(l1, l2) {
  if (l1.val < l2.val) {
    var l = new ListNode(l1.val);
    l1 = l1.next;
  } else {
    var l = new ListNode(l2.val);
    l2 = l2.next;
  }

  var lCurrent = l;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      lCurrent.next = l1;
      l1 = l1.next;

    } else {
      lCurrent.next = l2;
      l2 = l2.next;
    }
    lCurrent = lCurrent.next
  }

  if (l1) {
    lCurrent.next = l1;
  } 
  
  if (l2) {
    lCurrent.next = l2
  }

  return l;
}
