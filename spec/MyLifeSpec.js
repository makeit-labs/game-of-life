const MyLife = require("../src/MyLife");

describe("My life", () => {
  let myLife = new MyLife();
  let myNeighbors;

  it("dies in solitude", () => {
    myNeighbors = [];
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(false);
  });

  it("dies in a conflict", () => {
    myNeighbors = [true];
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(false);
  });

  it("lives a balanced life with 2 friends", () => {
    myNeighbors = [true, true];
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(true);
  });

  it("lives a happy life in a 3-person family", () => {
    myNeighbors = [true, true, true];
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(true);
  });

  it("dies of scarce resource", () => {
    myNeighbors = [true, true, true, true];
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(false);

    myNeighbors = [true, true, true, true,
                  true, true, true, true];
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(false);
  });

  it("is born", () => {
    myNeighbors = [true, true, true];
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(true);
  });
});
