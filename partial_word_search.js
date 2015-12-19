var wordSearch = function word_search(query, seq){
    var i = 0;
    var stringArray = [ ];
    while (i<seq.length){
        var seqLower = seq[i].toLowerCase();
        var queryLower = query.toLowerCase();
        if (seqLower.indexOf(queryLower) > -1){
        stringArray.push(seq[i]);
      }
      i++;
    }
    if (stringArray.length === 0){
        stringArray.push("Empty");
    }
    return stringArray;
};