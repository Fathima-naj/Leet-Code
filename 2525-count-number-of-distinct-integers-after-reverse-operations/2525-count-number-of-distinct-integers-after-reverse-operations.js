/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
  
let k= nums.map(v=>parseInt(v.toString().split('').reverse('').join('')))

let a=[...nums,...k]
let ans=new Set(a)
return ans.size
};