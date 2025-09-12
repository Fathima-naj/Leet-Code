/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let arr=[]
for(i=1;i<=n;i++){
    if(i%3==0 || i%5==0 || i%7==0){
        arr.push(i)
    }
}
if(arr.length==0){
    return 0
}else{
    let sum = arr.reduce((t,a)=>t+a)
    return sum
}
};