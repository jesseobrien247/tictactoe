//To-do:
//1. optimise victoryCheck();
//2. ability to add names in message instead of "player x" / "player 0"
//3. ai difficulties
//3.1 make ai move randomly in medium difficutly after the player wins the Game
//3.2 currently if the player wins, the ai will still move to stop the player from winning the previous round
//3.3 medium difficulty: playing 2 symbols in the bottom row does not trigger the bot to block you

//defining global vars
var button = '',
	turncounter = 0,
	turnvalue = "X",
	playerXscore = 0,
	playerOscore = 0,
	aimessage = "Ai Mode",
	ai = "on",
	randomcell = "",
	difficulty = "Easy",
	difficultymessage = "",
	grid = [undefined, "", "", "", "", "", "", "", "", ""];
	randomcells = [undefined, "a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];

//track any clicks that happen on our cells
function reply_click(clicked_id) {
	button = clicked_id;
	//check if the clicked cell is empty
	if (document.getElementById(button).innerHTML == '') {
		//add the appropriate symbol
		document.getElementById(button).innerHTML = turnvalue;
		//run through a series of functions after a successful move is made
		successfullMove();
		//check if ai is toggled on
		if (ai == "on") {
			//if so, make the ai's move
			insertAiSymbol();
			//run through a series of functions after a successful move is made
			successfullMove();
		}
	}
}
//run through a series of functions after a successful move is made
function successfullMove() {
	//increase the turn counter
	turncounter += 1;
	//update the variables associated with each cell
	innerHTMLToVar();
	//check if victory for the current player has been achieved
	victoryCheck();
	//change the turn value
	changeTurn();
	//update the message displayed above the game
	message();
}
//change the turn value
function changeTurn() {
	if (turnvalue == "O") {
		turnvalue = "X";
	} else {
		turnvalue = "O";
	}
}
//update the message displayed above the game
function message() {
	var message = "<h3>" + "It is " + turnvalue + "'s turn" + "</h3>" +
		"<h3>" + "X : " + playerXscore + " | O  : " + playerOscore + "</h3>";
	document.getElementById("score").innerHTML = message;
}
//update the variables associated with each cell
function innerHTMLToVar() {
	var q = 1;
	do {
		grid[q] = document.getElementById(randomcells[q]).innerHTML;
		q += 1;
	}
	while (q < 10);
}
//checks for victory or a draw and if so, starts a new game
function victoryCheck() {
	//Check if a player has a winning combination
	if (
		(grid[1] == grid[2] && grid[1] == grid[3] && grid[1] == turnvalue) ||
		(grid[4] == grid[5] && grid[4] == grid[6] && grid[4] == turnvalue) ||
		(grid[7] == grid[8] && grid[7] == grid[9] && grid[7] == turnvalue) ||

		(grid[1] == grid[4] && grid[1] == grid[7] && grid[1] == turnvalue) ||
		(grid[2] == grid[5] && grid[2] == grid[8] && grid[2] == turnvalue) ||
		(grid[3] == grid[6] && grid[3] == grid[9] && grid[3] == turnvalue) ||

		(grid[1] == grid[5] && grid[1] == grid[9] && grid[1] == turnvalue) ||
		(grid[3] == grid[5] && grid[3] == grid[7] && grid[3] == turnvalue)
	) {
		score();
	} else if (turncounter == 9) {
		alert("It\'s a draw!!!!!");
		newgame();
	}
}
//check who scored the winning combination
function score() {
	alert("Player " + turnvalue + " wins!!!");
	if (turnvalue == "X") {
		playerXscore += 1;
	} else {
		playerOscore += 1;
	}
	newgame();
}
//start a new game
function newgame() {
	//clears the cells
	varToInnerHTML();
	//resets the turn counter to 0
	turncounter = 0;
	//update the message displayed above the game
	message();
}
//clears the cells
function varToInnerHTML() {
	var cells = document.getElementsByClassName('cell');
	for (var i = 0; i < cells.length; ++i) {
		var cell = cells[i];
		cell.innerHTML = '';
	}
}
//toggles ai mode and resets the game state on button press
function mode() {
	newgame();
	if (ai == "off") {
		ai = "on";
		aimessage = "Ai: On";
		document.getElementById('aidifficulty').style.display = "inline";
	} else {
		ai = "off";
		aimessage = "Ai: Off";
		document.getElementById('aidifficulty').style.display = "none";
	}
	document.getElementById('ai').innerHTML = aimessage;
}
//toggles ai mode and resets the game state on button press
function changedifficulty() {
	newgame();
	if (difficulty == "Easy") {
		difficulty = "Medium";
	} else if (difficulty == "Medium") {
		difficulty = "Impossible";
	} else if (difficulty == "Impossible") {
		difficulty = "Easy";
	}
	difficultymessage = "Toggle Ai Difficulty: " + difficulty;
	document.getElementById('aidifficulty').innerHTML = difficultymessage;
}
//resets the score
function resetscore() {
	playerOscore = 0;
	playerXscore = 0;
	message();
	newgame();
}
