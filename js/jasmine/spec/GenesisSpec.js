var testCenter = function(threeByThree) {
  var counter = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (threeByThree[i][j]) {
        counter++;
      }
    }
  }
  return counter > 2;
}

describe("Playing the game of life", function(){
  it("dies of under population", function(){
    var basicBoard = [
      [false, false, false],
      [false, true, false],
      [false, false, false]
    ];
    expect(testCenter(basicBoard)).toEqual(false);

    basicBoard = [
      [false, false, false],
      [true, true, false],
      [false, false, false]
    ];
    expect(testCenter(basicBoard)).toEqual(false);
  });

  it("lives with 2 neighbors", function(){
    var basicBoard = [
      [false, false, false],
      [true, true, true],
      [false, false, false]
    ];
    expect(testCenter(basicBoard)).toEqual(true);
  })
});
