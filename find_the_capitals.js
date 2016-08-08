var capitals = function (word) {
	var solution = [];
	for(i=0; i<word.length; i++){
		if(word[i] === word[i].toUpperCase()){
			solution.push(i);
		}
	}
	return solution;
};
