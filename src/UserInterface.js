"use strict";

function UserInterface() {
  this.board = new Board().showFields();
}

// refactor this method
UserInterface.prototype.displayGrid = function () {
  var horizontalGrid = "\n --- --- ---\n  "
  return " " + this.board[0]+ " | " + this.board[1] + " | " + this.board[2] + horizontalGrid + this.board[3]+ " | " + this.board[4] + " | " + this.board[5] + horizontalGrid + this.board[6]+ " | " + this.board[7] + " | " + this.board[8] + " ";
};
