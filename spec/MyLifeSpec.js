const MyLife = () => {};
MyLife.prototype.toBeOrNotToBe = () => {
  return true;
};

describe("My life", function() {
  let myLife = new MyLife();
  it("lives", function(){
    expect(myLife.toBeOrNotToBe()).toEqual(true);
  });
});
