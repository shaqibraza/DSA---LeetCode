/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
    let ans = 0;

    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    const lcm = (a, b) => (a / gcd(a, b)) * b;

    for (let i = 0; i < nums.length; i++) {
        let prod = 1;
        let g = 0;
        let l = 1;

        for (let j = i; j < nums.length; j++) {
            prod *= nums[j];
            g = gcd(g, nums[j]);
            l = lcm(l, nums[j]);

            if (prod > 25200) break;

            if (prod === g * l) {
                ans = Math.max(ans, j - i + 1);
            }
        }
    }

    return ans;
};