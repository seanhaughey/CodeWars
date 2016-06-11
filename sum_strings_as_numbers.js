function sumStrings(a,b) { 
  if(a===""){
    a = "0";
  }
  if(b===""){
    b = "0";
  }
  if(a.length<=15 && b.length<=15){
    var x = parseInt(a);
    var y = parseInt(b);
    return (x+y).toString();
  }
  else {
    var arrayA = a.split("");
    var arrayB = b.split("");
    var newArray = [];
    var solution = "";
    if(arrayA.length===arrayB.length) {
        for(i=0; i<arrayA.length; i++) {
            newArray.push(parseInt(arrayA[i]) + parseInt(arrayB[i]));
        }
    }
    else if(arrayA.length>arrayB.length){
        for(i=arrayA.length-1; i>=0; i--) {
            if(arrayB[(arrayA.length-1)-i] === undefined) {
                 arrayB.unshift("0");
            }
        }
        for(i=0; i<arrayA.length; i++){
        	newArray.push(parseInt(arrayA[i]) + parseInt(arrayB[i]));
        }
    }
    else {
        for(i=arrayB.length-1; i>=0; i--) {
            if(arrayA[(arrayB.length-1)-i] === undefined) {
                arrayB.unshift("0");
            }
        }
        for(i=0; i<arrayB.length; i++){
        	newArray.push(parseInt(arrayB[i]) + parseInt(arrayA[i]));
        }
    }
    for(i=newArray.length-1; i>=0; i--) {
        if(newArray[i]>9 && i>0) {
            newArray[i-1] = Math.floor(newArray[i]/10) + newArray[i-1];
            newArray[i] = newArray[i]%10;
        }
    }
    for(i=0; i<newArray.length; i++) {
        solution = solution + newArray[i];
    }   
    return solution;
  }
 }