/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let x=s.split(' ')
     for(i=0;i<x.length;i++){
     x[i]=x[i].trim()
     }
     x=x.filter(v=>v.length>0)
    return x.reverse().join(' ').trim()
};