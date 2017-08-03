function MyLife(){}

MyLife.prototype.toBeOrNotToBe = function(meAndMyNeighbors) {
  var counter = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (meAndMyNeighbors[i][j]) {
        counter++;
      }
    }
  }
  if (meAndMyNeighbors[1][1]) return counter > 2 && counter < 5;
  else return counter == 3;
};
