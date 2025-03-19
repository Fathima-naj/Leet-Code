/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
     let arr=[]
 for(i=0;i<nums.length;i++){
     for(j=0;j<nums.length;j++){
         
            if(Math.abs(nums[i]-nums[j])>=valueDifference && Math.abs(i-j)>=indexDifference){
                
                    arr.push([i,j])
                }
     }
    
 }
 if(arr==''){
   return [-1,-1]
 }
 else{
      return arr[0]
 }

};