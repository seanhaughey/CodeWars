function palindromize(number){
    var string = number.toString();
    var i = 0;
    var j = 0;
    while(i<=string.length/2){
        if (string[i] === string[string.length-(i+1)]) {
            i++;
        }
        else {
            string = (parseInt(string) + parseInt(string.split("").reverse().join(""))).toString();
            j = j + 1;
            i = 0;
        }
        solution = j.toString() + " " + string;
    }
    return solution;
}