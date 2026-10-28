/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length == 0) return 0;
    for(let i = 0; i < nums.length; i++){
        if(target == nums[i] || target < nums[i]) return i;
    }
    return nums.length;
};