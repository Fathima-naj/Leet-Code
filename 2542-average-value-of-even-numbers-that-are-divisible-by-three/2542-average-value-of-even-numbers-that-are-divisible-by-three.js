/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let a=[0]
let avg;
for(i=0;i<nums.length;i++){
    if(nums[i]%2==0 && nums[i]%3==0){
        a.push(nums[i])
    }
}
let sum=a.reduce((t,a)=>t+a,0)
if(sum===0){
    avg=0
}else{
 avg=sum/(a.length-1)
}
return Math.floor(avg);
};