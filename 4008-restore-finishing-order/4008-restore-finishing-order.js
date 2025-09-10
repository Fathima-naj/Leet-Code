/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let ind=[]
for(i=0;i<order.length;i++){
    if(friends.includes(order[i])){
        ind.push(order[i])
    }
}
return ind;
};