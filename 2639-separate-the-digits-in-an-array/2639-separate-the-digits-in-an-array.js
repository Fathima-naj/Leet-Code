/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let x=nums.toString().split("")
let k=x.filter(v=>v!=',')
let m=k.map(v=>Number(v))
return m
};