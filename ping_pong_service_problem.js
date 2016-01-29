function service(score){
    var array = score.split(":");
    var total = parseInt(array[0]) + parseInt(array[1]);
    if(total < 5) {
        return "first";
    }
    else if(total < 10) {
        return "second";
    }
    else if(total < 40) {
        if(total%10 < 5) {
            return "first";
        }
        else {
            return "second";
        }
   
    }
    else {
       if(total%4 > 1){
           return "second";
       }
       else {
           return "first";
       }
    }
}