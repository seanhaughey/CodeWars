var bowlingScore = function(rolls) {
    var score = 0;
    var frame = 1;
    for (i=0; i < rolls.length; i++) {
      if ((rolls[i] + rolls[i+1]) < 10 ) {
          score = score + rolls[i] + rolls[i+1];
          i++;
          frame = frame + 1;
      }
      else if ((rolls[i] !== 10) && ((rolls[i] + rolls[i+1]) === 10) && (frames < 10)) {
          score = score + 10 + rolls[i+2];
          i++;
          frame = frame + 1;
      }
      else if ((rolls[i] !== 10) &&((rolls[i] + rolls[i+1]) === 10) && (frames === 10)) {
          score = score + 10 + rolls[i+2];
          i = rolls.length;
      }
      else if ((frame != 10) && (rolls[i] === 10)) {
          score = score + 10 + rolls[i+1] + rolls[i+2];
          frame = frame + 1;
      }
      else if ((frame === 10) && (rolls[i] === 10)){
          score = score + 10 + rolls[i+1] + rolls[i+2];
          i = rolls.length;
      }
  }
  return score;
};