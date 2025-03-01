/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let je=jewels.split('')
let s=stones.split('')
let count=0;
for(i=0;i<s.length;i++){
    for(j=0;j<je.length;j++){
        if(je[j]===s[i]){
            count++
        }
    }
}
return count
};