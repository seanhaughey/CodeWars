function shortcut(string){
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var solution = "";
    for (i=0; i<=string.length; i++) {
        if (vowels.indexOf(string.charAt(i)) === -1) {
            solution = solution + string.charAt(i);
        }
    }
    return solution;
}