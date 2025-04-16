/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let arr=[]
for(i=0;i<words.length;i++){
    for(j=i+1;j<words.length;j++){
        if(words[i].includes(words[j])){
            arr.push(words[j])
        }else if(words[j].includes(words[i])){
            arr.push(words[i])
        }
    }
}
let ans=arr.filter((v,i)=>arr.indexOf(v)==i)
return ans
};