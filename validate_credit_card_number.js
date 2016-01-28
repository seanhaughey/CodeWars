function validate(n){
    var sum = 0;
    var i = 0;
    var x = 1;
    var nArray = n.toString().split("");
    if(nArray.length%2 === 0) {
        while(i<nArray.length) {
            nArray[i] = nArray[i]*2;
            if(nArray[i]>9) {
                nArray[i] = nArray[i]-9;
            }
            i = i+2;
        }
        for(j=0; j<nArray.length; j++){
            sum = sum + parseInt(nArray[j]);
        }
    }
    else {
        while(x<nArray.length) {
            nArray[x] = nArray[x]*2;
            if(nArray[x]>9) {
                nArray[x] = nArray[x]-9;
            }
            x = x+2;
        }
        for(j=0; j<nArray.length; j++){
            sum = sum + parseInt(nArray[j]);
        }
    }
    return sum%10 === 0;
}