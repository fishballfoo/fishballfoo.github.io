startGame();

function startGame() {
    for(var i = 0; i <= 8; i++){
        clearBox(i);
    }
    document.turn = "X";
    document.winner = null;
    turnMessage("Player 1 uses " + document.turn + " to Start");
}

function turnMessage(msg) {
    document.getElementById("player-turn").innerText = msg;
}

function nextMove(square) {
    if(document.winner == "WIN") {
        turnMessage(document.turn + " already won.")
    }
    else if(document.winner == "TIE") {
        turnMessage("It's TIED. Click Replay to Play Again")
    }
    else if(square.innerText == ''){
    square.innerText = document.turn;
    switchTurn()
    }
    else{
        turnMessage("Pick Another Square!")
    }
}

function switchTurn() {
    if(checkWinner(document.turn)){
        turnMessage("Congrats " + document.turn + ", you won!");
        console.log(document.turn);
        trackScore(document.turn);
        document.winner = "WIN";
    }
    else if(checkForTie()){
        turnMessage("It's a TIE! Click Replay to Play Again");
        document.winner = "TIE";
    }
    else if(document.turn =="X") {
        document.turn = "O";
        turnMessage("It's " + document.turn + "'s turn now.");
    }
    else{
        document.turn = "X";
        turnMessage("It's " + document.turn + "'s turn now.");
    } 
}

function checkWinner(move) {
    var result = false;
    if(checkRow(0, 1, 2, move) ||
       checkRow(3, 4, 5, move) ||
       checkRow(6, 7, 8, move) ||
       checkRow(0, 3, 6, move) ||
       checkRow(1, 4, 7, move) ||
       checkRow(2, 5, 8, move) ||
       checkRow(0, 4, 8, move) ||
       checkRow(2, 4, 6, move)) {
          result = true; 
       }
    return result;
}

function checkForTie() {
    var result = false;
    if (getBox(1) != '' && getBox(2) != '' && getBox(3) != '' && getBox(4) != '' && getBox(5) != '' && getBox(6) != '' && getBox(7) != '' && getBox(8) != ''){
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    var result = false; 
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move){
        result = true;
    }
    return result;
}

function getBox(number) {
    return document.getElementById(number).innerText;
}

function clearBox(number) {
    document.getElementById(number).innerText = '';
}

function trackScore(turn){
    if (turn == "X") {
        let playerOne = document.getElementById("Player1");
        playerOneScore = parseInt(playerOne.innerHTML) + 1;
        playerOne.innerHTML = playerOneScore;
    }
    else {
        let playerTwo = document.getElementById("Player2");
        playerTwoScore = parseInt(playerTwo.innerHTML) + 1;
        playerTwo.innerHTML = playerTwoScore;
    }
}

function resetGame(){
    reset = 0
    document.getElementById("Player1").innerHTML = reset;
    document.getElementById("Player2").innerHTML = reset;
    startGame();
}