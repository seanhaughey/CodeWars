function flipNumber(n) {
	var solution = "";
	var arr = n.split("");
	var l = arr.length;
	for(i=0; i<l; i++){
		arr.reverse();
		solution += arr[0];
		arr.shift();
	}
	return solution;
}