/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let ans=[]
let w=s.split(' ')
for(i=0;i<k;i++){
    ans.push(w[i])
}
return ans.join(' ')
};