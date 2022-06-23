// 1480 Running Sum of 1d Array
var runningSum = function(nums) {
    let total = 0
    let result = []
    
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i]
        result.push(total)
    }
    return result
};
//

// 724. Find Pivot Index
var pivotIndex = function(nums) {
    let totalSum = 0;
    
    for (let i=0; i < nums.length; i++) {
        totalSum += nums[i];
    }
    
    let leftSum = 0;
    for (let i=0; i<nums.length; i++) {
        if (i != 0) leftSum += nums[i-1];
        if (totalSum - leftSum - nums[i] == leftSum) {
            return i;
        }
    }
    
  return -1;
};
//