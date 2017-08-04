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

  it("must be larger or equal to 3x3", () => {
    expect(() => {
      theLand.genesis(1, 1);
    }).toThrowError("The land is invalid");
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
