/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let ans = 0;

    for(let i = 0; i < nums.length; i++){
        let elem = nums[i];
        elem = Math.abs(elem);

        if(nums[elem] > 0){
            nums[elem] = -nums[elem];
        }else{
            ans = elem;
            break;
        }
    }
    for(let i = 0; i < nums.length; i++){
        nums[i] = Math.abs(nums[i]);
    }

    return ans;
};