/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let arr=[]
let n=nums.map(v=>Math.abs(v))

    for(j=0;j<n.length;j++){
        if(Math.min(...n)==n[j]){
            arr.push(nums[j])
        }
    
}
return Math.max(...arr)
};