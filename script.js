const css     = document.querySelector("h3");
const color1  = document.querySelector(".color1");
const color2  = document.querySelector(".color2");
const body    = document.getElementById("gradient");
var rdm  = document.getElementById("random");

function setGradient(){
    body.style.background = "linear-gradient(to right, " 
                            + color1.value 
                            + ", " 
                            + color2.value 
                            + ")";
    
    css.textContent = body.style.background + ";";
}

function setRandomColor(){
    var color = Math.floor(Math.random() * 16777215).toString(16);
    for(count = color.length; count < 6; count++) {
        color = "0" + color;                     
    }

    return "#" + color;
}

function generateRandom(){
    var randomColor1 = setRandomColor();
    var randomColor2 = setRandomColor();

    body.style.background = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;

    css.textContent = ` Selection: ${body.style.background}  `;
    color1.value = randomColor1;
    color2.value = randomColor2;
}

window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rdm.addEventListener("click", generateRandom)

