function consecutive(arr) {
  var total = 0;
  arr = arr.sort(function(a,b) {return a-b});
  for(i=0; i<arr.length-1; i++){
    total += (arr[i+1]-arr[i])-1;
  }
  return total;
}