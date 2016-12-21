"use strict";

describe("UserInterface", function () {
  var userInterface;
  var board;

  beforeEach(function() {
    userInterface = new UserInterface();
    board = new Board();
  });

  it("prints the contents of the board", function () {
    expect(userInterface.board).toEqual(["1","2","3","4","5","6","7","8","9"]);
  });

  it("prints the grid", function() {
    var boardDisplay = " 1 | 2 | 3 \n --- --- ---\n  4 | 5 | 6\n --- --- ---\n  7 | 8 | 9 "
    expect(userInterface.displayGrid()).toEqual(boardDisplay);
  });
});
