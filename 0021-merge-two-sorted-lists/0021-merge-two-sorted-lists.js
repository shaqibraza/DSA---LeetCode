/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
        dummy = new ListNode(-1);
        ans = dummy;
        ptr1 = list1;
        ptr2 = list2;

        while(ptr1 != null && ptr2 != null){
            if(ptr1.val < ptr2.val){
                dummy.next = ptr1;
                ptr1 = ptr1.next;
            }else{
                dummy.next = ptr2;
                ptr2 = ptr2.next;
            }
            dummy = dummy.next;
        }
        if(ptr1 == null){
            dummy.next = ptr2;
        }else{
            dummy.next = ptr1;
        }

        return ans.next;
};