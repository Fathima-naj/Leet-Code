/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let arr=[]
for(i=0;i<nums1.length;i++){
    for(j=0;j<nums2.length;j++){
        if(nums1[i]%(nums2[j]*k)==0){
            arr.push([i,j])
        }
    }
}
return arr.length

};