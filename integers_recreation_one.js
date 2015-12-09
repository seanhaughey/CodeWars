function listSquared(m, n) {
    var divisors = [];
    var squaredDivisors = [];
    var sum = 0;
    var innerArray = [];
    var solution = [];
    for(x=m; x<=n; x++) {
        for(i=1; i<=x; i++) {
            if(x%i===0) {
            divisors.push(i);
            }
        }
        for(j=0; j<divisors.length; j++){
            squaredDivisors.push(Math.pow(divisors[j], 2));
        }
        for(k=0; k<squaredDivisors.length; k++) {
            sum+=squaredDivisors[k];
        }
        if (Math.pow(sum, .5) % 1 === 0) {
            innerArray.push(x, sum);
            solution.push(innerArray);
            innerArray = [];
            divisors = [];
            squaredDivisors = [];
            sum = 0;
        }
        else {
            divisors = [];
            squaredDivisors = [];
            sum = 0;
        }
    }
    return solution;
}