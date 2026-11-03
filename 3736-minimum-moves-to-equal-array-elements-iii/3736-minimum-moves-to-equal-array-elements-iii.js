/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let max = Math.max(...nums);

    let ans = 0;
    for(let num of nums){
        ans += max - num;
    }
    
    return ans;
};