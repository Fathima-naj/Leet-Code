/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    let arr=[]
for(i=0;i<nums.length;i++){
   if(nums[i].toString().length >1){
       let x=nums[i].toString().split('')
       let s=x.reduce((t,a)=>Number(t)+Number(a))
       if(s==i){
           arr.push(i)
       }
   }else{
       if(nums[i]==i){
           arr.push(i)
       }
   }
}
if(arr.length==0){
    return -1
}else if(arr.length !=0){
    return Math.min(...arr)
}
};