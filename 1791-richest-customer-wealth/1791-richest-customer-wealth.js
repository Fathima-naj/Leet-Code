/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let a=[]
for(i=0;i<accounts.length;i++){
    let x=accounts[i].reduce((a,t)=>a+t)
    a.push(x)
}
return Math.max(...a)
};