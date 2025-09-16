/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) { 
let a=s.split('')
for(i=0;i<a.length;i++){
    if(a[i].toUpperCase()==s[i]){
        a[i]=a[i].toLowerCase()
    }
}
return a.join('')
};