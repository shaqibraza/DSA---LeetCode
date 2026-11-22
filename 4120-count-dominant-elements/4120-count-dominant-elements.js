/**
 * @param {number[]} nums
 * @return {number}
 */
var countDominantElements = function(nums) {
    if(nums.length === 1) return 1;

    let count = 0;
    if(nums[0] >= nums[1]){
        count++;
    }

    if(nums[nums.length - 1] >= nums[nums.length - 2]){
        count++;
    }

    for(let i = 1; i <= nums.length - 2; i++){
        let avg = (nums[i - 1] + nums[i + 1]) / 2;

        if(nums[i] >= avg){
            count++;
        }
    }

    return count;
};