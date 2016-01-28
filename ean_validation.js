function validateEAN(eanCode) {
    var array = eanCode.split("");
    var sum = 0;
    for(i=0; i<12; i++){
        if(i%2 !== 0) {
            array[i] = array[i] * 3;
        }
        else {
            array[i] = array[i] * 1;
        }
        sum = sum + array[i];
    }
    var checksum = 10 - (sum%10);
    if(checksum === 10) {
        checksum = 0;
    }
    return checksum == array[12];
}