/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head == null || head.next == null) return null;

    // find the size of the linked list
    let size = 0;
    curr = head;
    while(curr != null){
        curr = curr.next;
        size++;
    }

    if(size == n){
        return head.next;
    }

    if(head.next.next == null){
        head.next = null;
        return head;
    }
    
    const idxToSearch = size - n;
    prev = head;
    let i = 1;
    while(i < idxToSearch){
        prev = prev.next;
        i++;
    }

    prev.next = prev.next.next;
    return head;
};