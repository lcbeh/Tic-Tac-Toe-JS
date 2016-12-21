"use strict";

describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });

  it("has 9 fields", function() {
    expect(board.showFields()).toEqual(["1","2","3","4","5","6","7","8","9"]);
  });

  it("can mark a field", function(){
    board.mark("x", 4);
    expect(board.showFields()).toEqual(["1","2","3","4","x","6","7","8","9"]);
  });

});
