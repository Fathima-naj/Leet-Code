/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let a=sentence.split(' ')
let v=['a','e','i','o','u','A','E','I','O','U']
let x=''

for(i=0;i<a.length;i++){
    x+='a'
   if(v.includes( a[i][0])){
       
        a[i]=a[i]+"ma" +x
    }else{
      let l=a[i].slice(0,1)
      a[i]=a[i].slice(1)+l+"ma"+x
    }
   
}
return a.join(' ');
};