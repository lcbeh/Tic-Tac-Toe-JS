"use strict";

describe("UserInterface", function () {
  var userInterface;
  var game;

  beforeEach(function() {
    game = new Game();
    userInterface = new UserInterface();
  });

  it("prints the board", function() {
    var horizontalGrid = "\n --- --- ---\n "
    var boardDisplay = " 1 | 2 | 3 " + horizontalGrid + " 4 | 5 | 6 " + horizontalGrid + " 7 | 8 | 9 "
    expect(userInterface.displayBoard(game.showFields())).toEqual(boardDisplay);
  });

  it("updates the board", function() {
    game.markField(4);
    var horizontalGrid = "\n --- --- ---\n "
    var boardDisplay = " 1 | 2 | 3 " + horizontalGrid + " x | 5 | 6 " + horizontalGrid + " 7 | 8 | 9 "
    expect(userInterface.displayBoard(game.showFields())).toEqual(boardDisplay);
  });

});
