/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length){
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;

    let low = 0;
    let high = m;

    const half = Math.floor((m + n + 1) / 2);

    while(low <= high){
        const i = Math.floor((low + high) / 2);
        const j = half - i;

        const left1 = i === 0 ? -Infinity : nums1[i - 1];
        const right1 = i === m ? Infinity : nums1[i];

        const left2 = j === 0 ? -Infinity : nums2[j - 1];
        const right2 = j === n ? Infinity : nums2[j];

        if(left1 <= right2 && left2 <= right1){
            if((m + n) % 2 === 1){
                return Math.max(left1, left2);
            }

            return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
        }

        if(left1 > right2){
            high = i - 1;
        }else{
            low = i + 1;
        }
    }
};