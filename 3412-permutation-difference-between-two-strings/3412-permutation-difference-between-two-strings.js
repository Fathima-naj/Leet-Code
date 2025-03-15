/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let arr=[]
let x=s.split('')
let y=t.split('')
for(i=0;i<x.length;i++){
    for(j=0;j<y.length;j++){
        if(x[i]==y[j])
        arr.push(Math.abs(i-j))
    }
}
let sum=arr.reduce((tot,acc)=>acc+tot)
return sum
};