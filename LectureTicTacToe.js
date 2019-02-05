var gameSpaces = document.querySelectorAll("td");
var currentPlayer = 1;

//Handler to handle button clicks
function clickedSquare(e) {
    console.log("Clicked square");
    if (currentPlayer === 1 && e.target.innerHTML ===""){
        e.target.innerHTML = "X";
        currentPlayer = 2;
    }
    else if (e.target.innerHTML ==="") {
        e.target.innerHTML = "0";
        currentPlayer = 1;
    }
}

//add a click event listener for each game space
for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].addEventListener('click', clickedSquare);
}

//function to check for a winner
function checkForWinner() {
    console.log("check for a winner");
}

checkForWinner();