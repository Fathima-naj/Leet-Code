/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let h=[...heights]
let count=0;
let expected=heights.sort(function(a,b){
    return a-b
})


for(i=0;i<heights.length;i++){
    //   console.log(heights[i])
    if(h[i]!=expected[i]){
      
            count++
        
    }
}
return count
};