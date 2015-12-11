function dominator(arr) {
  arr.sort();
  for (var i = 0, v = 0, c = 0; i < arr.length; i++) {
     if (v == arr[i]) c++;
     else { 
       v = arr[i];
       c = 1;
     }
     if (c > arr.length / 2) return v;
  }
  return -1;
}