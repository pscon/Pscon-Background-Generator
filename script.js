var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");


// color1.addEventListener("input", function() {
//     body.style.background = 
//     "linear-gradient(to right, " 
//     + color1.value 
//     + "," 
//     + color2.value 
//     + ")";
// })

// color2.addEventListener("input", function() {
//     body.style.background = 
//     "linear-gradient(to right, " 
//     + color2.value 
//     + "," 
//     + color2.value 
//     + ")";
// })

// color3.addEventListener("input", function() {
//     body.style.background = 
//     "linear-gradient(to right, " 
//     + color3.value 
//     + "," 
//     + color3.value 
//     + ")";
// })


function setgradient(){
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    + "," 
    + color3.value 
    + ")";


    css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setgradient);

color2.addEventListener("input", setgradient);

color3.addEventListener("input",   setgradient);
