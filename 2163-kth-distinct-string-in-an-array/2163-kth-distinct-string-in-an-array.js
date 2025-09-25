/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let d=arr.filter((v)=>arr.indexOf(v)==arr.lastIndexOf(v))
if(d.length>=k){
 return d[k-1]
}else{
    return ''
}
};