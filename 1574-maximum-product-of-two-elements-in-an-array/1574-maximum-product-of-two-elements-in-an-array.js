/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let x=[]

for(i=0;i<nums.length;i++){
    for (j=i+1;j<nums.length;j++){
        let y=(nums[i]-1)*(nums[j]-1);
        x.push(y)
    }
}
return Math.max(...x)
};