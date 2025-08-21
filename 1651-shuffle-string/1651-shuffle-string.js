/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
 let arr=new Array(s.length)
    for(j=0;j<indices.length ;j++){
        arr[indices[j]]=s[j]
    }
    return arr.join('')
};