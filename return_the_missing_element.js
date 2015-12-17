function getMissingElement(superImportantArray){
  var missingElement = superImportantArray.sort(function(a,b){
    return a-b});
  for (i=0; i<missingElement.length; i++) {
    if (missingElement[0] !== 0){
      return 0;
      }
    else if (missingElement[i] !== (missingElement[i+1]) - 1) {
      return missingElement[i + 1] - 1;
     }
   } 
}