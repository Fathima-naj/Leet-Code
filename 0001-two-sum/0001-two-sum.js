/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ans;
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            var x=nums[i]+nums[j];
            if(x==target){
                    ans=[i,j];
            }
        }
    }return ans;
};