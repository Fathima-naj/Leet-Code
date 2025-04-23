/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
     let g=grid.flat()
 let ans=[]
 let v=g.filter(v=>g.indexOf(v)!=g.lastIndexOf(v))
 ans.push(v[0])
  for(i=1;i<=g.length;i++){
     if(!g.includes(i)){
         ans.push(i)
     }
 }
 return ans;
};