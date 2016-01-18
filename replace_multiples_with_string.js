function getNumber(number){
    newNumber = Math.abs(number);
    if ((newNumber % 3 === 0) && (newNumber % 5 > 0)) {
        return "THREE";
    }
    else if ((newNumber % 5 === 0) && (newNumber % 3 > 0)) {
        return "FIVE";
    }
    else if ((newNumber % 3 === 0) && (newNumber % 5 === 0)) {
        return "BOTH";
    }
    else {
        return number;
    }
}

function getNumberRange(first, last){
    var solution = [];
    if (first <= last) {
        for (i=first; i<=last; i++) {
            solution.push(getNumber(i));
        }
    }
    else {
        for (i=first; i>=last; i--) {
            solution.push(getNumber(i));
        }
    }
    return solution;
}