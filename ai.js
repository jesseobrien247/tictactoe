//make the ai's move
function insertAiSymbol() {
	if (difficulty == "Easy") {
		easyAi();
	} else if (difficulty == "Medium") {
		mediumAi();
	} else if (difficulty == "Impossible") {
		impossibleAi();
	}
}

function easyAi() {
	//randomise the ai's move
	randomcell = 1 + (Math.floor(Math.random() * 9));
	//if the cell the ai wants to play into is empty, add the appropriate symbol
	if (document.getElementById(randomcells[randomcell]).innerHTML == "") {
		document.getElementById(randomcells[randomcell]).innerHTML = turnvalue;
	}
	//else rechoose a cell
	else {
		insertAiSymbol();
	}
}

//Under testing and construction :)
function mediumAi() {
	var w = 1;
	var t = 1;
	var th = 1;
	var h = t,
		h2 = t + 1;
	v = t;
	v2 = t + 3;
	do {
		h = t;
		h2 = th + 1;
		v = t;
		v2 = t + 3;
		do {
			if ((grid[h] !== "") &&
				(grid[h] !== turnvalue) &&
				(grid[h] == grid[h + 1]) &&
				(grid[h + 2] == "") &&
				(w == 1)
			) {
				alert("h");
				w += 1;
				document.getElementById(randomcells[h + 2]).innerHTML = turnvalue;
				h = 12;
			} else if ((grid[h2] !== "") &&
				(grid[h2] !== turnvalue) &&
				(grid[h2] == grid[h2 + 1]) &&
				(grid[h2 - 1] == "") &&
				(w == 1)
			) {
				alert("h2");
				w += 1;
				document.getElementById(randomcells[h2 - 1]).innerHTML = turnvalue;
				h2 = 13;
			} else if ((grid[v] !== "") &&
				(grid[v] !== turnvalue) &&
				(grid[v] == grid[v + 3]) &&
				(grid[v + 6] == "") &&
				(w == 1)
			) {
				alert("v");
				w += 1;
				document.getElementById(randomcells[v + 6]).innerHTML = turnvalue;
				v = 12;
			} else if ((grid[v2] !== "") &&
				(grid[v2] !== turnvalue) &&
				(grid[v2] == grid[v2 + 3]) &&
				(grid[v2 - 3] == "") &&
				(w == 1)
			) {
				alert("v2");
				w += 1;
				document.getElementById(randomcells[v2 - 3]).innerHTML = turnvalue;
				v2 = 13;
			}
			v += 3;
			h += 3;
			h2 += 3;
			v2 += 3;
		} while ((h < 10) && (h2 < 10) && (v < 10) && (v2 < 10) && (w == 1));
		t += 1;
		th += 3;
	} while ((t < 4) && (w == 1));
	if (w == 1) {
		//randomise the ai's move
		randomcell = 1 + (Math.floor(Math.random() * 9));
		//if the cell the ai wants to play into is empty, add the appropriate symbol
		if (document.getElementById(randomcells[randomcell]).innerHTML == "") {
			document.getElementById(randomcells[randomcell]).innerHTML = turnvalue;
		}
		//else rechoose a cell
		else {
			insertAiSymbol();
		}
	}
}

//a1 a2 a3
//b1 b2 b3
//c1 c2 c3

//Will be made using an algorithm one day
function impossibleAi() {
	//randomise the ai's move
	randomcell = 1 + (Math.floor(Math.random() * 9));
	//if the cell the ai wants to play into is empty, add the appropriate symbol
	if (document.getElementById(randomcells[randomcell]).innerHTML == "") {
		document.getElementById(randomcells[randomcell]).innerHTML = turnvalue;
	}
	//else rechoose a cell
	else {
		insertAiSymbol();
	}
}
