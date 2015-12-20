function ipToInt32(ip){
   return ip.split(".").reduce(function(int,v){ return int*256 + +v } )
}