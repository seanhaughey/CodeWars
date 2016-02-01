function prime(num) {
    var solution = [];
    for(i=2; i<=num; i++){
        var x = 2;
        var p = 0;
        while(x<=num) {
            if(i%x===0) {
                p++;
                x++;
            }
            else {
                x++;
            }

        }
        if(p===1) {
            solution.push(i);
        }
    }
    return solution;
}