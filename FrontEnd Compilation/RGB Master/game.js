var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".care");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupCares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}
// parametrage des carés 
function setupCares(){
	for(var i = 0; i < squares.length; i++){
	//ecouteur d'evennement
		squares[i].addEventListener("click", function(){
			//on selectionne la couleur du caré cliqué
			var clickedColor = this.style.background;
			//on compare à la couleur du jeu, si la cbonne couleur on change tout 
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
                // sinon, on ramene le caré cliqué à la couleur du backgroud
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}
// reinitialisation 
function reset(){
	colors = generateRandomColors(numSquares);
	//on choisit une couleur au hasard
	pickedColor = pickColor();
	//on affiche son code rgb
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//on change la couleur des carés
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}
resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//iteration dans les carés
	for(var i = 0; i < squares.length; i++){
		//on change la couleur de chaque caré
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//creation d'un tableau
	var arr = []
	//repeter n fois 
	for(var i = 0; i < num; i++){
		//mettre l'array généré dans randomcolor
		arr.push(randomColor())
	}
	//retourner l'array
	return arr;
}

function randomColor(){
	//rouge entre O et 255
	var r = Math.floor(Math.random() * 256);
	//vert entre O et 255
	var g = Math.floor(Math.random() * 256);
	//bleu entre O et 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


