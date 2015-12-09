function toWeirdCase(string){
  string = string.toLowerCase();
  var array = string.split(" ");
  var newArray = [];
  for(i = 0; i < array.length; i++) {
    var word = array[i];  
    for(j = 0; j < word.length; j++) { 
        if(j % 2 === 0) {
            letter = word.charAt(j).toUpperCase();
        }
        else {
            letter = word.charAt(j);
        }
        newArray.push(letter);    
    }
        if(i < array.length - 1){
        newArray.push(" ");
        }
    }
    updatedArray = newArray.join("");
    var newString = updatedArray.toString();

    return newString;
}