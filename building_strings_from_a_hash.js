function solution(pairs){
    var k = Object.keys(pairs);
    var solution = "";
    console.log(k);
    for(i=0; i<k.length; i++){
        if(i==k.length-1) {
            solution = solution + k[i] + " = " + pairs[k[i]];
        }
        else {
            solution = solution + k[i] + " = " + pairs[k[i]] + ",";
        }
    }
    return solution;
}