/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let count=0;
    for(i=1;i<=n;i++){
        for(k=1;k<=n;k++){
            for(j=1;j<=n;j++){
                if((i*i)+(k*k)===(j*j)){
                    count++
                }
            }
        }
    }
    return count
};