/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let arr=[]
    for(i=0;i<nums.length;i++){
    for(j=i+1;j<nums.length;j++){
        for(k=j+1;k<nums.length;k++){
            if((nums[j]-nums[i]==diff)&&(nums[k]-nums[j]==diff)){
                arr.push([i,j,k])
            }
        }
    }
}
return arr.length;
};