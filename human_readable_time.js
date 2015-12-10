function humanReadable(seconds) {
    var remainingSeconds = seconds%60;
    var minutes = parseInt(seconds/60);
    var remainingMinutes = minutes%60;
    var hours = parseInt(minutes/60);
    if (seconds <= 359999){
        if (seconds < 10) {
            return "00:00:0" + seconds;
        }
        else if (seconds < 60) {
            return "00:00:" + seconds;
        }
        else if ((minutes < 10) && (remainingSeconds < 10)) {
            return "00:0" + minutes + ":0" + remainingSeconds;
        }
        else if ((minutes < 10) && (remainingSeconds > 10)) {
            return "00:0" + minutes + ":" + remainingSeconds;
        }
        else if ((minutes > 10) && (minutes < 60) && (remainingSeconds < 10)) {
            return "00:" + minutes + ":0" + remainingSeconds;
        }
        else if ((minutes > 10) && (minutes < 60) && (remainingSeconds > 10)) {
            return "00:" + minutes + ":" + remainingSeconds;
        }
        else if ((hours < 10) && (remainingMinutes < 10) && (remainingSeconds < 10)){
            return "0" + hours + ":0" + remainingMinutes + ":0" + remainingSeconds;
        }
        else if ((hours < 10) && (remainingMinutes < 10) && (remainingSeconds > 10)) {
            return "0" + hours + ":0" + remainingMinutes + ":" + remainingSeconds;
        }
        else if ((hours < 10) && (remainingMinutes > 10) && (remainingSeconds < 10)){
            return "0" + hours + ":" + remainingMinutes + ":0" + remainingSeconds;
        }
        else if ((hours < 10) && (remainingMinutes > 10) && (remainingSeconds > 10)){
            return "0" + hours + ":" + remainingMinutes + ":" + remainingSeconds;
        }
        else if ((hours > 10) && (remainingMinutes < 10) && (remainingSeconds < 10)){
            return hours + ":0" + remainingMinutes + ":0" + remainingSeconds;
        }
        else if ((hours > 10) && (remainingMinutes < 10) && (remainingSeconds > 10)){
            return hours + ":0" + remainingMinutes + ":" + remainingSeconds;
        }
        else if ((hours > 10) && (remainingMinutes > 10) && (remainingSeconds < 10)){
            return hours + ":" + remainingMinutes + ":0" + remainingSeconds;
        }
        else if ((hours > 10) && (remainingMinutes > 10) && (remainingSeconds > 10)){
            return hours + ":" + remainingMinutes + ":" + remainingSeconds;
        }
    }
    else {
        return false;
    }
}