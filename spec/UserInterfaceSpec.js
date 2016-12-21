"use strict";

describe("UserInterface", function () {
  var userInterface;
  var game;

  beforeEach(function() {
    userInterface = new UserInterface();
    game = new Game();
  });

  it("prints the board", function() {
    var horizontalGrid = "\n --- --- ---\n "
    var boardDisplay = " 1 | 2 | 3 " + horizontalGrid + " 4 | 5 | 6 " + horizontalGrid + " 7 | 8 | 9 "
    expect(userInterface.displayGrid()).toEqual(boardDisplay);
  });
});
