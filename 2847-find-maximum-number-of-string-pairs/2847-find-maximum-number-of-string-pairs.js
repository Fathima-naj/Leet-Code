/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let count=0
for(i=0;i<words.length;i++){
    for(j=i+1;j<words.length;j++){
        let w=words[j].split('').reverse().join('')
        if(words[i]==w){
           count++;
        }
    }
}
return count;
};