var repeatIt = function(str, n) {
    var solution = "";
    if (typeof str == "string"){
        for(i=1; i <= n; i++) {
            solution = solution + str;
        }
        return solution;
    }
    else {
        return "Not a string";
    }
  };