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

//14 Longest Common Prefix //
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        console.log("")
    }
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i ++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix
    
};
//

// 20. Valid Parentheses //
var isValid = function(s) {
    
    let bracket = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let heap = [];
    
    for(let char of s){
        if(bracket[char]) {
            heap.push(bracket[char])
        } else {
            if(heap.pop() !== char) return false
        }
    }
    
    return (!heap.length)
};
//