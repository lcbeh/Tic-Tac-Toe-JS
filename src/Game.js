function Game() {
  this._fields = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.currentPlayer = "x";
}

Game.prototype.showFields = function() {
  return this._fields
};

Game.prototype.markField = function (mark, index) {
  if (this.checkField(index)) {
    this._fields[index - 1] = mark;
    this.switchTurn();
  } else {
    return "Field has been claimed.Choose another field."
  }
};

Game.prototype.switchTurn = function () {
  this.currentPlayer = this.currentPlayer == "x" ? "o" : "x";
};

Game.prototype.checkField = function (index) {
  return typeof this._fields[index - 1] === "number";
};
