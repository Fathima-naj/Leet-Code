/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    let max=Math.max(...nums)
let min=Math.min(...nums)
let n=[]
for(i=0;i<nums.length;i++){
    if(nums[i]!=max&&nums[i]!=min){
        n.push(nums[i])
    }
    
}
     if(n.length==0){
        return -1
     }else{
        return n[0]
     }
};
