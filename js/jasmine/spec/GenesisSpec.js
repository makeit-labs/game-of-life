var seedBoard = function(rows, columns){
  var board = [];
  for (var i = 0; i < rows; i++) {
    var row = [];
    for (var j = 0; j < columns; j++) {
      row.push(j == 0);
    }
    board.push(row);
  }
  return board;
}

var applyRule1 = function(seedBoard) {
  
  return [[false, false, false],
        [true, false, false],
        [false, false, false]];
}

describe("Seeding the board", function() {

  it("bears 3x3 lives", function() {
    expect(seedBoard(3, 3)).toEqual([
      [true, false, false],
      [true, false, false],
      [true, false, false]
    ]);
  });

  it("bears 4x3 lives", function() {
    expect(seedBoard(4, 3)).toEqual([
      [true, false, false],
      [true, false, false],
      [true, false, false],
      [true, false, false]
    ]);
  });

  it("bears 3x4 lives", function() {
    expect(seedBoard(3, 4)).toEqual([
      [true, false, false, false],
      [true, false, false, false],
      [true, false, false, false]
    ]);
  });
});

describe("Playing the game of life", function(){
  describe("dying when it has less than 2 neighbors", function(){
    it("dies with a basic board", function(){
      var basicBoard = [
        [true, false, false],
        [true, false, false],
        [true, false, false]
      ];
      expect(applyRule1(basicBoard)).toEqual([
        [false, false, false],
        [true, false, false],
        [false, false, false]
      ]);
    });

    it("dies with a mirrored board", function(){
      var mirrorBoard = [
        [false, false, true],
        [false, false, true],
        [false, false, true]
      ];

      expect(applyRule1(mirrorBoard)).toEqual([
        [false, false, false],
        [false, false, true],
        [false, false, false]
      ]);
    });
  });
});
