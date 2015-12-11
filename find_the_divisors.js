function divisors(integer) {
  var div = [];
  for (i = 2; i < integer; i++) {
    if (integer % i === 0) {
      div.push(i);
    }
  }
    if (div.length === 0){
        return integer + " is prime";
    }
    return div;
}