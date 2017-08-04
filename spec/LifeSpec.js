import Life from "../src/Life";

let myLife;
let myNeighbors;

describe("A living life", () => {
  beforeEach(() => {
    myLife = new Life(true);
  });
  it("dies when it's too lonely", () => {
    myNeighbors = [
      new Life(false),
      new Life(false),
      new Life(false),
    ];
    myLife.toBeOrNotToBe(myNeighbors);
    expect(myLife.isAlive).toEqual(false);
  });
});

// describe("A living life", () => {
//   beforeEach(() => {
//     myLife = new Life(true);
//   });
//
//   describe("when there's less than 2 neighbors"), () => {
//     it("dies when it's too lonely", () => {
//       myNeighbors = [
//         new Life(false),
//         new Life(false),
//         new Life(false),
//       ];
//       myLife.toBeOrNotToBe(myNeighbors);
//       expect(myLife.isAlive).toEqual(false);
//     });
//
//     it("dies when 1 neigbor is not enough to sustain the life", () => {
//       myNeighbors = [
//         new Life(true),
//         new Life(false),
//         new Life(false),
//       ];
//       myLife.toBeOrNotToBe(myNeighbors);
//       expect(myLife.isAlive).toEqual(false);
//     });
//
//   describe("when there are 2 or 3 neigbors", () => {
//     it("lives happlily with 2 friends", () => {
//       myNeighbors = [
//         new Life(true),
//         new Life(true),
//         new Life(false),
//       ];
//       myLife.toBeOrNotToBe(myNeighbors);
//       expect(myLife.isAlive).toEqual(true);
//     });
//
//     it("lives happily in a 3-person family", () => {
//       myNeighbors = [
//         new Life(true),
//         new Life(true),
//         new Life(true),
//       ];
//       myLife.toBeOrNotToBe(myNeighbors);
//       expect(myLife.isAlive).toEqual(true);
//     });
//   });
//
//   it("dies of scarce resource", () => {
//     myNeighbors = [
//       new Life(true),
//       new Life(true),
//       new Life(true),
//       new Life(true),
//       new Life(false),
//     ];
//     myLife.toBeOrNotToBe(myNeighbors);
//     expect(myLife.isAlive).toEqual(false);
//
//     myNeighbors = [
//       new Life(true),
//       new Life(true),
//       new Life(true),
//       new Life(true),
//       new Life(true),
//       new Life(true),
//       new Life(true),
//       new Life(true),
//     ];
//     myLife.toBeOrNotToBe(myNeighbors);
//     expect(myLife.isAlive).toEqual(false);
//   });
// });
//
// describe("A dead life", () => {
//   beforeEach(() => {
//     myLife = new Life(false);
//   });
//
//   it("is born when it has 3 neighbors", () => {
//     myNeighbors = [
//             new Life(true),
//             new Life(true),
//             new Life(true),
//           ];
//     myLife.toBeOrNotToBe(myNeighbors);
//     expect(myLife.isAlive).toEqual(true);
//   });
//
// });
