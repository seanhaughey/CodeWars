function getAverage(marks){
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}
