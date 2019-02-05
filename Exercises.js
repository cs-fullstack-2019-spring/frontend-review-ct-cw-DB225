var gameSpaces = document.querySelectorAll("td");
var current_playa = 1;

// Handler to handle button clicks
function clickedSquare(e){
    console.log("test");
    if(current_playa === 1 && e.target.innerHTML ===""){
        e.target.innerHTML = "X";
        current_playa =2;
    }
    else if (e.target.innerHTML ===""){
        e.target.innerHTML = "O";
        current_playa =1;
    }
    //check for winner
    checkforWinner();
}

// Add a click event listener for each game space
for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].addEventListener('click', clickedSquare);
}

// Exercise2
// function to check for a winner
function checkforWinner() {
    console.log('Checking for winner');
    if ((gameSpaces[0].innerText === gameSpaces[1].innerText && gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText === "X")
        || (gameSpaces[3].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText === "X")
        || (gameSpaces[6].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "X")
        || (gameSpaces[0].innerText === gameSpaces[3].innerText && gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText === "X")
        || (gameSpaces[1].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText === "X")
        || (gameSpaces[2].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "X")
        || (gameSpaces[0].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "X")
        || (gameSpaces[2].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText === "X")) {
        alert("X wins");
        return false;
    } else if ((gameSpaces[0].innerText === gameSpaces[1].innerText && gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText === "O")
        || (gameSpaces[3].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText === "O")
        || (gameSpaces[6].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "O")
        || (gameSpaces[0].innerText === gameSpaces[3].innerText && gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText === "O")
        || (gameSpaces[1].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText === "O")
        || (gameSpaces[2].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "O")
        || (gameSpaces[0].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText === "O")
        || (gameSpaces[2].innerText === gameSpaces[4].innerText && gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText === "O")) {
        alert("O wins");
        return false;
    }
}
//Exercise3
//Add the necessary logic to determine when the game ends in a tie (CAT) and use an alert to notify the players.
// (HINT: There is a very easy way to do this once #2 is working)



//Exercise4
//Add a New Game button that when clicked, will clear the game area and start a new game.
var resetBtn= document.getElementById("clear");
resetBtn.onclick = function(e) {
    for (var i = 0; i < gameSpaces.length; i++) {
        gameSpaces[i].innerHTML = "";
    }
};

//Challenge
//When the New Game button is clicked, allow the player to specify the total number of rounds to be played in a set.
// Add the logic to determine when a player has won the set.
