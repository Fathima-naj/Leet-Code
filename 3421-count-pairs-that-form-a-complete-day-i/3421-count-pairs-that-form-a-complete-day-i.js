/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    let count=0;
for(i=0;i<hours.length;i++){
    for(j=i+1;j<hours.length;j++){
        if((hours[i]+hours[j])%24==0){
             count++;
        }
    }
}
return count;
};