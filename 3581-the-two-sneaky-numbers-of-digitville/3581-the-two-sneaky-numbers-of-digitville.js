/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let ans=nums.filter(v=>nums.indexOf(v)!=nums.lastIndexOf(v))
let v=ans.filter((v,i)=>ans.indexOf(v)==i)
 return v
};