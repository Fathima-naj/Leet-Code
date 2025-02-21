/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let x=nums.toString().split("")
let m=x.filter(v=>v!=',').map(v=>Number(v))
let elem=nums.reduce((acc,tot)=>acc+tot)
let dig=m.reduce((acc,tot)=>acc+tot)
return elem-dig
};