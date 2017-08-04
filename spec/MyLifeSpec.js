const MyLife = require("../src/MyLife");
let myLife = new MyLife();
let myNeighbors;

describe("My life", () => {
  it("dies in solitude", () => {
    myNeighbors = 0;
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(false);
  });

  it("dies in a conflict", () => {
    myNeighbors = 1;
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(false);
  });

  it("lives a balanced life with 2 friends", () => {
    myNeighbors = 2;
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(true);
  });

  it("lives a happy life in a 3-person family", () => {
    myNeighbors = 3;
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(true);
  });

  it("dies of scarce resource", () => {
    myNeighbors = 4;
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(false);

    myNeighbors = 8;
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(false);
  });

  it("is born", () => {
    myNeighbors = 3;
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(true);
  });
});
