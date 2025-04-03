/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let arr=[]
for(i=0;i<nums.length;i++){
    for(j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j]&&i<j){
            arr.push([i,j])
        }
    }
}return arr.length
};