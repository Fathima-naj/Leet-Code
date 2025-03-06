/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let y= x.toString().split('')
let v=y.map(t=>Number(t)).reduce((tot,acc)=>tot+acc)

if(x%v==0){
    return v;
}else{
    return -1;
}

};