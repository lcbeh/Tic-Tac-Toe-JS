function Game() {
  this._fields = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.currentPlayer = "x";
  this.winner = null;
  this.WINNING_RULES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
}

Game.prototype.showFields = function() {
  return this._fields
};

Game.prototype.markField = function (mark, index) {
  if (this._checkField(index)) {
    this._fields[index - 1] = mark;
    this.checkStatus();
  } else {
    return "Field has been claimed.Choose another field."
  }
};

Game.prototype._switchTurn = function () {
  this.currentPlayer = this.currentPlayer == "x" ? "o" : "x";
};

Game.prototype._checkField = function (index) {
  var self = this;
  if (this._fields.every(field => typeof field === "string")) {
    self.gameOver();
  } else {
    return typeof self._fields[index - 1] === "number";
  }
};

Game.prototype.checkStatus = function () {
  this.gameWon() ? this.gameOver() : this._switchTurn();
};

Game.prototype.gameWon = function () {
  var self = this;
  return this.WINNING_RULES.some(function (rule) {
    return self._fields[rule[0]] === self._fields[rule[1]] && self._fields[rule[0]] === self._fields[rule[2]];
  });
};

Game.prototype.gameOver = function () {
  if (this.gameWon()) {
    this.winner = this.currentPlayer === "x" ? "Player 1" : "Player 2";
  }
  this._fields = [1, 2, 3, 4, 5, 6, 7, 8, 9];
};
