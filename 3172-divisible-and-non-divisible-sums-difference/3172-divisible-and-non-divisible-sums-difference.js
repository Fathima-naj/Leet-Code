/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1=0;
let num2=0;
for(i=0;i<=n;i++){
    if(i%m!=0){
        num1+=i;
    }else if(i%m==0){
        num2+=i
    }
}
return num1-num2
};