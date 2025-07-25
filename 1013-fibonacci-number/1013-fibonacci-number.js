/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n==0){
    return 0
}else if(n==1){
    return 1
}
    let f=[0,1]
if(n>f.length){
    for(let i=2;i<n;i++){
        f.push(f[i-1]+f[i-2])
    }
}

let sum =f[n-1]+f[n-2];
return sum
};