function add(a, b) {
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
        for(i=0; i<arrayA.length; i++) {
            if(arrayB[(arrayA.length-1)-i] === undefined) {
                arrayB[(arrayA.length-1)-i] = 0;
            }
            newArray.push(parseInt(arrayA[i]) + parseInt(arrayB[(arrayA.length-1)-i]));
        }
    }
    else {
        for(i=0; i<arrayB.length; i++) {
            if(arrayA[(arrayB.length-1)-i] === undefined) {
                arrayA[(arrayB.length-1)-i] = 0;
            }
            newArray.push(parseInt(arrayB[i]) + parseInt(arrayA[(arrayB.length-1)-i]));
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