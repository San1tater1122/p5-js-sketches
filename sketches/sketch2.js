
function setup(){
    createCanvas(400, 400);
    background(200);
}

function draw(){
    if (keyIsPressed){ // when key is pressed
        fill(255, 255, 0); // yellow
        ellipse(width/2, height/2, 150, 100); // middle of the canvas
    }
}

function keyReleased(){ // when key is released
    noFill();  // didn't say what the color is so I put no color
    ellipse(mouseX, mouseY, 50, 75); // mouse position
}

function doubleClicked(){ // double click
    background(200); // background cover the canvas
}