    

var computerChoice = function (){
  var rando= Math.floor((Math.random() * 100) + 1);
  console.log("rando =" + rando);
  var result;

    if (rando <= 33) {
      result = "scissors";
    } else if (rando <= 66) {
      result = "rock";
    } else {
      result= "paper";
    };
    console.log("result =" + result);
    return result;
  }

var compare = function(player, computer){
  var winner
  console.log("player =" + player);
  if (player === computer) {
    winner = "cat";
    return winner;
  } 

  if (player === "rock"){
    if (computer === "scissors"){
      winner = "player"
    } else {
      winner = "computer"
    }
    return winner;
  }

  if (player === "paper"){
    if (computer === "rock"){
      winner = "player"
    } else {
      winner = "computer"
    }
    return winner;
  }  
  if (player === "scissors"){
    if (computer === "paper"){
      winner = "player"
    } else {
      winner = "computer"
    }
    return winner;
  }
}

    // Event Handler for Rock
    $('#rock').on('click', function(){
       var result = compare('rock', computerChoice());
       $("#decision").html(result);
    });
    // Event Handler for Paper
    $('#paper').on('click', function(){
       var result = compare('paper', computerChoice());
       $("#decision").html(result);
    });
    // Event Handler for Scissors
    $('#scissors').on('click', function(){
       var result = compare('scissors', computerChoice());
       $("#decision").html(result);
    });