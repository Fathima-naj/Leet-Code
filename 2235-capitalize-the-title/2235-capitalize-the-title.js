/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let x=title.split(' ')
let c=""
let rem=""
for(i=0;i<x.length;i++){
    if(x[i].length==1||x[i].length==2){
       x[i]= x[i].toLowerCase()
    }else{
        c=x[i].slice(0,1).toUpperCase()
        rem=x[i].slice(1).toLowerCase()
        x[i]=c+rem
    }
}
return x.join(' ')
};