
var trackLength = 0;
var player1Position = 0;
var player2Position = 0;

function UpdatePosition(player) {
  BuildTrack(5);
  //var track = $(".racerTable");
  var track = document.getElementById("racingTrack");
  var cellInArray = $("." + player + "CellActive");
  cellInArray.css("background-color", "black");

  for (var i = 0, row; row = track.rows[i]; i++) {
    for (var a = 0, cell; cell = row.cells[a]; a++) {
      if (cell.classList.contains(player + "CellActive")) {
        var nextCell = track.rows[(i + 1)].cells[a];
        console.log(nextCell);
        cell.classList.remove(player + "CellActive");
        cell.classList.add(player + "Cell");
        nextCell.classList.remove(player + "Cell");
        nextCell.classList.add(player + "CellActive");
        return;
        //cell.classList.add(player + "Cell");
        //console.log(nextCell);
      }
    }
  }
}


function BuildTrack(length) {
  var track = $(".racerTable");
 //track.remove();
 for (var i = 0; i < length; i++) {
    track.append('<tr class ="trackRow' + i + '"><td class ="player1Cell"> <p class ="player1Text"></p></td><td class ="player2Cell"><p class = "player2text"></p></td></tr>');
  }   
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

    if (player == "player1" || player == "player2") {
      UpdatePosition(player);
    }
  });

  function TestText () {
    console.log("Omomsd!");
  }  
});