const MyLife = function(){
  this.isAlive = true;
};

MyLife.prototype.toBeOrNotToBe = function(myNeighbors) {
  if(myNeighbors > 1 && myNeighbors < 4) {
    this.isAlive = true;
  } else {
    this.isAlive = false;
  }
};

MyLife.prototype.countNeighbors = function(land) {
  let width = land.width,
      height = land.height,
      landScape = land.lifeEvidence;

  for (let i = 0; i < width; i++ ) {
    for (let j = 0; j < height; j++) {
      
    }
  }
  return 5;
};

module.exports = MyLife;
