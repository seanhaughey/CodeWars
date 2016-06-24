function ghostBusters(building) {
	var solution = "";
	for(i=0; i<building.length; i++){
		if(building.indexOf(" ")===-1){
			return "You just wanted my autograph didn't you?";
		}
		if(building[i]!==" "){
			solution += building[i];
		}
	}
	return solution;
}