/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let a=s.split('')
let diff=[]
let char=a.map(v=>v.charCodeAt(0))
for(i=0;i<char.length-1;i++){
   
        diff.push(Math.abs(char[i]-char[i+1]))
    
}

let sum=diff.reduce((tot,acc)=>acc+tot)
return sum
};