/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let a=[]
let n=nums.length
 for(i=0;i<n;i++){
     for(j=i+1;j<n;j++){
         if( nums[i]==nums[j] && ((i*j)%k==0)){
             a.push([i,j])
         }
     }
 } 
 return a.length
};