"use strict";

describe("Game", function() {
  var game;

  beforeEach(function () {
    game = new Game();
  });

  it("has 9 fields", function() {
    expect(game.showFields()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("can mark a field", function(){
    game.markField(4);
    expect(game.showFields()).toEqual([1, 2, 3, "x", 5, 6, 7, 8, 9]);
  });

  it("can allows users to switch turn", function () {
    game._switchTurn();
    expect(game.currentPlayer).toEqual("o");
  });

  it("switch turns automatically after a player claims a field", function () {
    game.markField(4);
    expect(game.currentPlayer).toEqual("o");
  });

  it("prevents players from claiming the same field", function () {
    game.markField(4);
    expect(game.markField(4)).toEqual("Field has been claimed.Choose another field.");
  });

  it("knows when a winner wins", function () {
    game._fields = ["x", "x", "x", 4, 5, 6, 7, 8, 9]
    expect(game.gameWon()).toEqual(true);
  });

  it("is over when a player wins", function() {
    spyOn(game, "gameWon").and.returnValue(true);
    game.checkStatus();
    expect(game.winner).toEqual("Player 1");
  });

  it("is over when all fields are claimed", function() {
    game._fields = ["x", "x", "o", "o", "o", "x", "x", "x", "o"];
    expect(game.gameDraw()).toBe(true);
    expect(game.gameOver()).toEqual("Game ends in a draw");
  });

  it("has no winner when game is draw", function() {
    game._fields = ["x", "x", "o", "o", "o", "x", "x", "x", "o"];
    expect(game.winner).toEqual(null);
  });

  it("can reset the game", function () {
    game._fields = ["x", "x", "o", "o", "o", "x", "x", "x", "o"];
    game.reset();
    expect(game.showFields()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

});
