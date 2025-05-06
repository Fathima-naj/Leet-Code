/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let n=[]
let a=[]
for(i=0;i<nums.length;i++){
    if(nums[i]==target){
        n.push(i)
    }
}
for(j=0;j<n.length;j++){
    a.push(Math.abs(n[j]-start))
} 
return Math.min(...a)
};