function compareLinkedLists(headA, headB) {
    // traverse through two lists at once
    while (headA && headB){
        if (headA.data !== headB.data){
          return 0;  
        }
        headA = headA.next;
        headB = headB.next;
    }
    
    // at this point, if the return hasn't been called, either headA or headB has traversed to the end. So there is stll a headA node or a headB node, it means the two lists are not the same lengths
    
    var answer = (headA || headB) ? 0 : 1;  
    return answer;
}
