// to check if a singly inked list is a palindrome

var isPalindrome = function(head) {

    // find midpoint of the LL
    var midpoint = findMiddle(head);
    // reverse the second half the of LL
    var reversed = reverseList(midpoint); 

    // check to see if the first half is the same as the reversed second half
    while(reversed != null){
        if(head.val != reversed.val) {
            return false;
        }
        head = head.next;
        reversed = reversed.next;
    }
    return true;

    // now lets create findMiddle and reverseNode
    function findMiddle(node){
        var fast = node;
        var slow = node;

        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    function reverseNode(node){
        if(node==null || node.next==null) return node;  
        var prev = null;
        var cur  = node;
        while(cur != null){
            var temp = cur;
            cur = cur.next;   
            temp.next = prev;
            prev = temp;
        }
        return prev;
    }
};