const MyLife = function(){
};

MyLife.prototype.toBeOrNotToBe = function(myNeighbors) {
  if(myNeighbors > 1 && myNeighbors < 4) {
    this.isAlive = true;
  } else {
    this.isAlive = false;
  }
};

module.exports = MyLife;
