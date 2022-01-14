module.exports = function reverse (n) {
   const stringN = Math.abs(n).toString();
   const arrayN = [...stringN];
   const reverseN = arrayN.reverse().join(''); 
   return reverseN;
 }
