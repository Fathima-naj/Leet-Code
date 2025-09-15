/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let a= n.toString().split('')
let p=a.reduce((t,a)=>Number(t)*Number(a))
let sum=a.reduce((t,a)=>Number(t)+Number(a))
return p-sum
};