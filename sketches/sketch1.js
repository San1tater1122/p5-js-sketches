function setup(){
    createCanvas(400, 400); // a canva that 400 by 400
}

function draw(){
    background(200); // Clear the canvas with a background
    
    if(keyIsDown(LEFT_ARROW)){ // keyIsDown() to check users key press statue
        fill(0, 0, 255); // blue
        circle(100, 100, 50); // at (100, 100) a 50 diameter
    }
    if(keyIsDown(RIGHT_ARROW)){
        fill(0, 255, 0); // Green
        circle(200, 200, 50); // at (200, 200) a 75 diameter
    }
    if(keyIsDown(32)){
        noFill(); 
        circle(mouseX, mouseY, 75); // at mouse a 75 diameter
    }
}