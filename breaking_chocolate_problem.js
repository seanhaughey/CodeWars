var breakChocolate = function(n, m) {
 var area = n * m;
 var totalBreaks = area - 1;
 if (totalBreaks <= 0){
   return 0;
  }
 else {
   return totalBreaks;
 };
};