const MyLife = function(){
};

MyLife.prototype.toBeOrNotToBe = function(myNeighbors) {
  let neighbors = 0;
  for (let n of myNeighbors) {
    if (n) { neighbors++; }
  }
  if(neighbors > 1 && neighbors < 4) {
    this.isAlive = true;
  } else {
    this.isAlive = false;
  }
};

module.exports = MyLife;
