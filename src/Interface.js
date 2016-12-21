$(document).ready(function() {
  var game = new Game();

  $("#1").click(function() {
    $("p").text(game.checkStatus());
    $("#1").text(game._fields[0]);
  });

  $("#2").click(function() {
    $("p").text(game.markField(2));
    $("#2").text(game._fields[1]);
  });

  $("#3").click(function() {
    $("p").text(game.markField(3));
    $("#3").text(game._fields[2]);
  });

  $("#4").click(function() {
    $("p").text(game.markField(4));
    $("#4").text(game._fields[3]);
  });

  $("#5").click(function() {
    $("p").text(game.markField(5));
    $("#5").text(game._fields[4]);
  });

  $("#6").click(function() {
    $("p").text(game.markField(6));
    $("#6").text(game._fields[5]);
  });

  $("#7").click(function() {
    $("p").text(game.markField(7));
    $("#7").text(game._fields[6]);
  });

  $("#8").click(function() {
    $("p").text(game.markField(8));
    $("#8").text(game._fields[7]);
  });

  $("#9").click(function() {
    $("p").text(game.markField(9));
    $("#9").text(game._fields[8]);
  });
});
