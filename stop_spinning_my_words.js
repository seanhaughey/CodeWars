function spinWords(string){
  var arr = string.split(' ');
  for(i=0; i<arr.length; i++){
    if(arr[i].length>4){
      arr[i] = arr[i].split('').reverse().join('');
    }
  }
  return arr.join(' ');
}