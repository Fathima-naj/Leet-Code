/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let reverse=[]
let arr=['']
for(i=0;i<words.length;i++){
    reverse.push(words[i].split('').reverse().join(''))
    if(words[i]==reverse[i]){
        arr.push(words[i])
    }
    
}
if(arr.length>1){
    return arr[1]
}else{
    return arr[0]
}
};