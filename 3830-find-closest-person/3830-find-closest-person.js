/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let m=Math.abs(z-x)
    let k=Math.abs(z-y)
    if(m<k){
        return 1
    }else if(k<m){
        return 2
    }else if(k==m){
        return 0
    }
};