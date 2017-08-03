describe("My life", function(){
  var myLife = new MyLife();
  var meAndMyNeighbors = [
    [false, false, false],
    [false, true, false],
    [false, false, false]
  ];

  it("dies of under population", function(){
    expect(myLife.toBeOrNotToBe(meAndMyNeighbors)).toEqual(false);

    meAndMyNeighbors = [
      [false, false, false],
      [true, true, false],
      [false, false, false]
    ];
    expect(myLife.toBeOrNotToBe(meAndMyNeighbors)).toEqual(false);
  });

  it("lives with 2 neighbors", function(){
    meAndMyNeighbors = [
      [false, false, false],
      [true, true, true],
      [false, false, false]
    ];
    expect(myLife.toBeOrNotToBe(meAndMyNeighbors)).toEqual(true);
  });

  it("lives with 3 neighbors", function(){
    meAndMyNeighbors = [
      [false, true, false],
      [true, true, true],
      [false, false, false]
    ];
    expect(myLife.toBeOrNotToBe(meAndMyNeighbors)).toEqual(true);
  });

  it("dies of over population", function(){
    meAndMyNeighbors = [
      [false, true, true],
      [true, true, true],
      [false, false, false]
    ];
    expect(myLife.toBeOrNotToBe(meAndMyNeighbors)).toEqual(false);
  });

  it("remains dead with less than 3 neighbors", function(){
    meAndMyNeighbors = [
      [true, false, false],
      [false, false, false],
      [false, false, false]
    ];
    expect(myLife.toBeOrNotToBe(meAndMyNeighbors)).toEqual(false);

    meAndMyNeighbors = [
      [true, true, false],
      [false, false, false],
      [false, false, false]
    ];
    expect(myLife.toBeOrNotToBe(meAndMyNeighbors)).toEqual(false);
  });

  it("is born from procreation", function(){
    meAndMyNeighbors = [
      [false, true, false],
      [true, false, true],
      [false, false, false]
    ];
    expect(myLife.toBeOrNotToBe(meAndMyNeighbors)).toEqual(true);
  });

  it("remains dead with more than 3 neighbors", function(){
    meAndMyNeighbors = [
      [true, true, true],
      [true, false, false],
      [false, false, false]
    ];
    expect(myLife.toBeOrNotToBe(meAndMyNeighbors)).toEqual(false);

    meAndMyNeighbors = [
      [true, true, true],
      [true, false, true],
      [true, true, true]
    ];
    expect(myLife.toBeOrNotToBe(meAndMyNeighbors)).toEqual(false);
  });
});
