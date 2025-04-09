/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let x=s.split('')
let v=x.map((a,i)=>(123-a.charCodeAt())*(i+1))
let ans=v.reduce((a,t)=>a+t)
return ans
};