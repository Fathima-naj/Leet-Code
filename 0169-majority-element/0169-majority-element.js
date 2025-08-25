/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
     let n= nums.length;
    let maj=n/2
    let count=0;
    let freq=new Map()
for(let num of nums){
  freq.set(num,(freq.get(num)||0)+1)
}
for(let [key,value] of freq){
    if(value>maj){
        return key;
    }
}

};