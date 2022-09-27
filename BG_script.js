var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button")
var btnR = document.getElementById("genNew1")

//Pre-populates the h3 with the color gradient
body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

css.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	btn.style.background = 
	"linear-gradient(to left, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
	console.log(color1.value)
}

function randomColorGen2() {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	;body.style.background = "#" + randomColor;
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", "
	+ "#"
	+ randomColor
	+ ")";
}

function randomColorGen() {
	//console.log(Math.floor(100000 + Math.random() * 900000));
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	body.style.background = 
	"linear-gradient(to right, "
	+"#"
	+ randomColor
	+ ", " 
	+ color2.value
	+ ")";

	//body.style.background = "#" + randomColor;
}

function randomNumber() {
	console.log(Math.floor(100000 + Math.random() * 900000))
}

btnR.addEventListener("click", randomColorGen2)
btn.addEventListener("click", randomColorGen);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);