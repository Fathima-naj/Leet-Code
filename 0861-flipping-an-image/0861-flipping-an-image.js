/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let b=image.map(v=>v.reverse())
for(i=0;i<b.length;i++){
    for(j=0;j<b[i].length;j++){
         if(b[i][j]===0){
        b[i][j]=1
    }else{
        b[i][j]=0
    }
    }
}
return b;
};