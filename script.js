
var trackLength = 0;
var player1Position = 0;
var player2Position = 0;

function UpdatePosition(player) {
  if (player == "player1") {
    $(".player1CellActive").css("background-color", "black");
  }

  if (player == "player2") {
    BuildTrack(5);
  }
}

function BuildTrack(length) {
  var track = $(".racerTable");
 //track.remove();
 for (var i = 0; i < length; i++) {
    track.append('<tr class ="trackRow"><td class ="player1Cell"> <p class ="player1Text"></p></td><td class ="player2Cell"><p class = "player2text"></p></td></tr>');
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

    UpdatePosition(player);
  });

  function TestText () {
    console.log("Omomsd!");
  }  
});