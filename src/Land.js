const Land = function(){};

Land.prototype.genesis = function(width, height) {

  const MyLife = require("../src/MyLife");

  if (width > 2 && height > 2){
    this.width = width;
    this.height = height;
    this.lifeEvidence = [];

    for (let i = 0; i < width; i++) {
      let row = [];
      let life = new MyLife();

      for (let j = 0; j < height; j++) {
        row.push(life);
      }
      this.lifeEvidence.push(row);
    }
  } else {
    throw new Error("The land is invalid");
  }
};

module.exports = Land;
