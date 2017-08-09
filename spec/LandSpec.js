const Land = require("../src/Land");
const Life = require("../src/Life");
let theLand = new Land();
let life = new Life();

describe("The land", () => {

  it("has a horizontal limit", () => {
    theLand.genesis(3, 3);
    expect(theLand.width).toBeTruthy();
  });

  it("has a vertical limit", () => {
    theLand.genesis(3, 3);
    expect(theLand.height).toBeTruthy();
  });

  it("shows life evidence", () => {
    theLand.genesis(3, 4);
    expect(theLand.lifeEvidence).toEqual([
      [life, life,life, life],
      [life, life,life, life],
      [life, life,life, life]
    ]);
  });

});

describe("An invalid land", () => {
  it("is smaller than 3x3", () => {
    expect(() => {
      theLand.genesis(2, 2);
    }).toThrowError("The land is invalid");
  });
});
