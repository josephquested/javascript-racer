
var trackBuilt = false;

var player1Position = 0;
var player2Position = 0;

function UpdatePosition(player) {
  var track = document.getElementById("racingTrack");
  var cellInArray = $("." + player + "CellActive");
  cellInArray.css("background-color", "black");

  for (var i = 0, row; row = track.rows[i]; i++) {
    for (var a = 0, cell; cell = row.cells[a]; a++) {
      if (cell.classList.contains(player + "CellActive")) {

        if ((i + 2) > track.rows.length) {
          GameOver(player);
          return;
        }

        var nextCell = track.rows[(i + 1)].cells[a];
        cell.classList.remove(player + "CellActive");
        cell.classList.add(player + "Cell");
        nextCell.classList.remove(player + "Cell");
        nextCell.classList.add(player + "CellActive");
        nextCell.innerHTML = player;
        return;
      }
    }
  }
}

function GameOver (player) {
  alert(player + " wins!");
  window.location.reload()
}


function BuildTrack() {
  $(".racerTable").remove();
  $(".board").prepend('<table id ="racingTrack" class="racerTable"><tr class ="startingRow"><td class ="player1CellActive">player1</td><td class ="player2CellActive">player2</td></tr></table>');
  var track = $(".racerTable");
  trackBuilt = true;
  var trackLength = document.getElementById("trackLength").value;
  for (var i = 0; i < trackLength; i++) {
    track.append('<tr class ="trackRow' + i + '"><td class ="player1Cell"></td><td class ="player2Cell"></td></tr>');
  }   

  document.getElementById("startingRowText").innerHTML = "Finish";
}

$('document').ready(function() {
  $(document).keyup(function(e){
    var player;

    if (e.which == 81) {
      player = "player1";
    }

    if (e.which == 80) {
      player = "player2";
    }

    if (trackBuilt) {
      if (player == "player1" || player == "player2") {
        UpdatePosition(player);
      }
    }
  });
});