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

  return this.isAlive;
};

describe("My life", () => {
  let myLife = new MyLife();
  let myNeighbors = [];

  it("dies in solitude", () => {
    myNeighbors = [false, false, false, false,
                  false, false, false, false];
    expect(myLife.toBeOrNotToBe(myNeighbors)).toEqual(false);
  });

  it("dies in a conflict", () => {
    myNeighbors = [true, false, false, false,
                  false, false, false, false];
    expect(myLife.toBeOrNotToBe(myNeighbors)).toEqual(false);
  });

  it("lives a balanced life with 2 friends", () => {
    myNeighbors = [true, true, false, false,
                  false, false, false, false];
    expect(myLife.toBeOrNotToBe(myNeighbors)).toEqual(true);
  });

  it("lives a happy life in a 3-person family", () => {
    myNeighbors = [true, true, true, false,
                  false, false, false, false];
    expect(myLife.toBeOrNotToBe(myNeighbors)).toEqual(true);
  });

  it("dies of scarce resource", () => {
    myNeighbors = [true, true, true, true,
                  false, false, false, false];
    expect(myLife.toBeOrNotToBe(myNeighbors)).toEqual(false);

    myNeighbors = [true, true, true, true,
                  true, true, true, true];
    expect(myLife.toBeOrNotToBe(myNeighbors)).toEqual(false);
  });

  it("is a void", () => {
    expect(myLife.isAlive).toEqual(false);
  });

  it("is born", () => {
    myNeighbors = [true, true, true, false,
                  false, false, false, false];
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(true);
  });
});
