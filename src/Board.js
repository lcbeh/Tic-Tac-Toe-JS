function Board() {
  this._fields = ["1","2","3","4","5","6","7","8","9"]
}

Board.prototype.showFields = function() {
  return this._fields
};

Board.prototype.mark = function (mark, index) {
  this._fields[index] = mark;
};
