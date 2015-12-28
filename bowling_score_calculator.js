var bowlingScore = function(rolls) {
    var score = 0;
    for (i=0; i < rolls.length; i++) {
      if ((rolls[i] + rolls[i+1]) < 10 ) {
          score = score + rolls[i] + rolls[i+1];
          i++;
      }
      else if ((rolls[i] !== 10) && ((rolls[i] + rolls[i+1]) === 10)) {
          score = score + 10 + rolls[i+2];
          i++;
      }
      else if ((i < rolls.length - 3) && (rolls[i] === 10)) {
          score = score + 10 + rolls[i+1] + rolls[i+2];
      }
      else if ((i === rolls.length - 3) && (rolls[i] === 10)){
          score = score + 10 + rolls[i+1] + rolls[i+2];
          i = rolls.length;
      }
  }
  return score;
};