"use strict";

describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });

  it("has 9 fields", function() {
    expect(board.showFields()).toEqual(["","","","","","","","",""]);
  });

  it("can mark a field", function(){
    board.mark("x", 5);
    expect(board.showFields()).toEqual(["","","","","x","","","",""]);
  });

});
