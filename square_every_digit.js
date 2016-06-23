function squareDigits(num){
	var arr = (num.toString()).split('');
	var newArr = [];
	for(i=0; i<arr.length; i++){
		newArr.push(Math.pow(arr[i], 2));	
	}
	return parseInt(newArr.join(''));
}