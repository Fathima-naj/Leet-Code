/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxKDistinct = function(nums, k) {
    let ans=[]
let a=[...new Set(nums)]
let m=a.sort((a,b)=>b-a)
if(m.length>k){
    for(i=0;i<k;i++){
    ans.push(m[i])
}
return ans
}else{
return m
}

};