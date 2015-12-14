function isPowerOfTwo(n){
  var i = 1;
  while(i < n){

    if (Math.pow(2, i) === n){
      return true;
    }
    else {
      i += 1;
    }
   }
   return false;
}