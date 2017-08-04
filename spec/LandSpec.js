const Land = require("../src/Land");
const MyLife = require("../src/MyLife");
let theLand = new Land();
let life = new MyLife();

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

describe("The game of life", () => {
  it("knows each life and their surroundings on a given land", () => {
    theLand.genesis(3,3);
    expect(theLand.lifeEvidence[0][0].countNeighbors()).toEqual(3);
    expect(theLand.lifeEvidence[0][1].countNeighbors()).toEqual(5);
    expect(theLand.lifeEvidence[0][2].countNeighbors()).toEqual(3);

    expect(theLand.lifeEvidence[1][0].countNeighbors()).toEqual(5);
    expect(theLand.lifeEvidence[1][1].countNeighbors()).toEqual(8);
    expect(theLand.lifeEvidence[1][1].countNeighbors()).toEqual(5);

    expect(theLand.lifeEvidence[2][0].countNeighbors()).toEqual(3);
    expect(theLand.lifeEvidence[2][1].countNeighbors()).toEqual(5);
    expect(theLand.lifeEvidence[2][2].countNeighbors()).toEqual(3);
  });
});
