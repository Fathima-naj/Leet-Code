/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let s=n.toString().split('')
let sum = s.reduce((t,a)=>Number(t)+Number(a))
let product =  s.reduce((t,a)=>Number(t)*Number(a))
let plus = sum +product
if(n%plus==0){
    return true
}else{
    return false 
}
};