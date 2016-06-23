function derDieDas(wort){
  var vowels = ['a', 'e', 'i', 'o', 'u', 'ä', 'ö', 'ü'];
  var counter = 0;
  var arr = (wort.toLowerCase()).split("");
  for(i=0; i<arr.length; i++){
    if(vowels.indexOf(arr[i])>-1){
      counter ++;
    }
  }
  if(counter<2){
    return "das " + wort;
  }else if(counter<4){
    return "die " + wort;
  }else {
    return "der " + wort;
  }
}