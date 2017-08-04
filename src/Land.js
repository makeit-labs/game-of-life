const Land = function(){};

Land.prototype.genesis = function(width, height) {

  const Life = require("../src/Life");

  if (width > 2 && height > 2){
    this.width = width;
    this.height = height;
    this.lifeEvidence = [];

    for (let i = 0; i < width; i++) {
      let row = [];
      let life = new Life();

      for (let j = 0; j < height; j++) {
        row.push(life);
      }
      this.lifeEvidence.push(row);
    }
  } else {
    throw new Error("The land is invalid");
  }

  // while(shouldStop) {
  //   nextGenration = iterate(this.lifeEvidence)
  //   print(nextGenration)
  //   this.lifeEvidence = newGeneration
  //   sleep(1000)
  // }

};
// function(lifeEvidence) {
//   nextGenration = []
//   for (row i) {
//     for (column j) {
//       neighbors =
//       nextGenration[i][j] = lifeEvidence[i][j].toBeOrNotToBe(neighbors)
//     }
//   }
//
// }
module.exports = Land;
