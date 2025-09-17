/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let arr=[]
if(a>b){
    for(i=0;i<=b;i++){
        if(a%i==0 && b%i==0){
            arr.push(i)
        }
    }
}else{
    for(i=0;i<=a;i++){
         if(a%i==0 && b%i==0){
            arr.push(i)
        }
    }
}
return arr.length
};