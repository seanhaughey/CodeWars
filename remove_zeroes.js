function removeZeros(array) {
    if (array.length === 0) return array;
    var z = 0; 
    for (var i = 0, len = array.length; i < len; i++) {
        if (array[i] === 0 || array[i] === "0") { 
            z = z + 1;

            for (var j = i + 1; j < len; j++) {
                var n = array[j]; 
                array[j] = array[j-1]; 
                array[j-1] = n;
            }

            i -= 1;
        }
        if (i + 1 + z >= len){
            return array;
        }
    }
}