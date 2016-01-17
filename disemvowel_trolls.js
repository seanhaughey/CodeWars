function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var solution = "";
    for (i=0; i<=str.length; i++) {
        if (vowels.indexOf(str.charAt(i)) === -1) {
            solution = solution + str.charAt(i);
        }
    }
  return solution;
}