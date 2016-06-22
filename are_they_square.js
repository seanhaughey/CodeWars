var isSquare = function(arr){
  if (arr.length===0)
  {
    return undefined;
  }
  for (i=0; i<arr.length; i++)
  {
    if (Math.sqrt(arr[i])%1!==0)
    {
      return false;
    }
  }
  return true;
}