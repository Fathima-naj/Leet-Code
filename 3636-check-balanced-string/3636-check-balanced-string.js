/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let odd=[]
let even=[]

for(i=0;i<num.length;i++){
    if(i%2==0){
      even.push(Number(num[i]))
    }else{
        odd.push(Number(num[i]))
    }
}
let oddSum=odd.reduce((v,a)=>v+a)
let evenSum=even.reduce((v,a)=>v+a)
if(oddSum==evenSum){
   return true
}else{
   return false
}
};