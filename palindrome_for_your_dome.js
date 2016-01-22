function palindrome(string) {
    var stringArray = [];
    for(i=0; i<string.length; i++) {
        if(string[i].match(/[a-z]/i)) {
            stringArray.push(string[i].toLowerCase());
      }
    }
    for(j=0; j<Math.ceil(stringArray.length/2); j++) {
        if(stringArray[j] !== stringArray[stringArray.length-(j+1)]){
            return false;
        }
    }
    return true;
}