/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let arr=num.split('')
    for(i=arr.length-1;i>=0;i--){
        if(arr[i]!=0){
            break;
        }
    }
    return arr.slice(0,i+1).join('')
};