var makeAcronym = function(string){
    var solution = "";
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7' ,'8' ,'9'];
    if(typeof string == "string") {
        for(i=0; i < string.length; i++) {
            if(numbers.indexOf(string.charAt(i)) > -1) {
                solution = "Not letters";
                return solution;
            }
            else {
                if(i === 0) {
                  solution = solution + string.charAt(0).toUpperCase();
                }
                else if(string.charAt(i-1) == " ") {
                    solution = solution + string.charAt(i).toUpperCase();
                }
            }
        }
    } 
    else if(typeof string !== "string"){
        return "Not a string";
    }
    return solution;
};