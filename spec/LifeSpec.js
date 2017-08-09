import Life from "../src/Life";

let myLife;
let myNeighbors;

describe("A living life", () => {
  beforeEach(() => {
    myLife = new Life(true);
  });
  describe("underpoluation", () => {

    it("dies when it's too lonely", () => {
      myNeighbors = [
        new Life(false),
        new Life(false),
        new Life(false),
      ];
      myLife.toBeOrNotToBe(myNeighbors);
      expect(myLife.isAlive).toEqual(false);
    });

    it("dies when it has only 1 neigbor", () => {
      myNeighbors = [
        new Life(true),
        new Life(false),
        new Life(false),
      ];
      myLife.toBeOrNotToBe(myNeighbors);
      expect(myLife.isAlive).toEqual(false);
    });

  });

  describe("statusis", () => {
    it("lives happlily with 2 friends", () => {
      myNeighbors = [
        new Life(true),
        new Life(true),
        new Life(false),
      ];
      myLife.toBeOrNotToBe(myNeighbors);
      expect(myLife.isAlive).toEqual(true);
    });

    it("lives happily in a 3-person family", () => {
      myNeighbors = [
        new Life(true),
        new Life(true),
        new Life(true),
      ];
      myLife.toBeOrNotToBe(myNeighbors);
      expect(myLife.isAlive).toEqual(true);
    });

  });

  describe("overpopulation", () => {

    it("dies when there are 4 neighbors", () => {
      myNeighbors = [
        new Life(true),
        new Life(true),
        new Life(true),
        new Life(true),
        new Life(false),
      ];
      myLife.toBeOrNotToBe(myNeighbors);
      expect(myLife.isAlive).toEqual(false);
    });

    it("dies when there are 8 neighbors", () => {
      myNeighbors = [
        new Life(true),
        new Life(true),
        new Life(true),
        new Life(true),
        new Life(true),
        new Life(true),
        new Life(true),
        new Life(true),
      ];
      myLife.toBeOrNotToBe(myNeighbors);
      expect(myLife.isAlive).toEqual(false);
    });

  });
});

describe("A dead life", () => {

  beforeEach(() => {
    myLife = new Life(false);
  });

  it("is reborn when it has 3 neighbors", () => {
    myNeighbors = [
            new Life(true),
            new Life(true),
            new Life(true),
          ];
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(true);
  });

});
