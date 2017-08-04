const Life = function(initialState){
  this.isAlive = initialState;
};

Life.prototype.toBeOrNotToBe = function(myNeighbors) {
  let numOfLivingNeighbors = myNeighbors.filter( (neighbor) => {
    return neighbor.isAlive;
  }).length;
  this.isAlive = (numOfLivingNeighbors > 1 && numOfLivingNeighbors < 4);
};

module.exports = Life;
