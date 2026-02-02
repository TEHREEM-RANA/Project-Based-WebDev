let button = document.getElementById("btn");
let title = document.getElementById("title");

let colors = ["red", "green", "blue", "yellow", "pink", "orange","brown","grey"]; // make array 

button.onclick = function () {
    let randomIndex = Math.floor(Math.random() * colors.length); 
     //Math.random() Gives number between 0 and 1
//      Math.floor(Math.random() * colors.length);
// This means:
// colors.length → total colors
// Random number × total
// Math.floor → round down
// Result: random index (0, 1, 2…)
    
    let selectedColor = colors[randomIndex];

    document.body.style.backgroundColor = selectedColor;
    title.style.color = selectedColor;
    button.style.color = "white";

    button.innerText = "Color Changed!";
};
//  You now understand:
// DOM selection
// Events
// Arrays
// Random logic
// Updating text
// Updating styles
// This is real JavaScript foundation.