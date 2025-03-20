/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let n=nums.length

let ans=[]
for(i=0;i<n;i++){
    for(j=i+1;j<n;j++){
        for(k=j+1;k<n;k++){
            if(i<j<k && nums[i]<nums[j] && nums[k]<nums[j]){
                ans.push([nums[i],nums[j],nums[k]])
            }
        }
    }
}
let sum=ans.map(v=>v.reduce((tot,acc)=>tot+acc))

    
if(sum==''){
    return -1
}
return Math.min(...sum)

};