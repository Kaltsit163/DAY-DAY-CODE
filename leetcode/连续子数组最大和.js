/* nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 连续子数组 [4,-1,2,1] 的和最大，为 6。
*/

// 

var maxSubArray = function(nums) {
    // 获取数组长度
    const numsLength = nums.length
    if(numsLength === 1){
        return nums[0]
    }
    let max = nums[0]
    // 存放 dp 的数据
    let dpi = nums[0]
    // 实现循环迭代
    for(let i = 1; i < numsLength; i ++){
        // dp 计算规则为如果 上次 dp > 0 让上次 dp 参与计算，否则丢弃
        dpi = dpi > 0 ? dpi + nums[i] : nums[i]
        // 在上次的最大值和计算好的 dp 中取最大值
        max = max > dpi ? max : dpi
    }
    return max
};