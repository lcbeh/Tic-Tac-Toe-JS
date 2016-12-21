"use strict";

function UserInterface() {
}

UserInterface.prototype.displayBoard = function (array) {
  var horizontalGrid = " \n --- --- ---\n  "
  return " " + array[0]+ " | " + array[1] + " | " + array[2] + horizontalGrid + array[3]+ " | " + array[4] + " | " + array[5] + horizontalGrid + array[6]+ " | " + array[7] + " | " + array[8] + " ";
};
