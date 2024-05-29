function setup(){
    createCanvas(400, 400); // canvas 400 by 400
    background(200); // don't cover 
}

function draw(){
    if (mouseIsPressed){ // when mouse is pressed
        stroke(255, 0, 0); // red
        line(0, 0, width, height); // top left to bottom right
    }
}

function mouseReleased(){ // when mouse is released
    stroke(0, 0, 255); // blue
    line(width, 0, 0, height); // top right to bottom left
}