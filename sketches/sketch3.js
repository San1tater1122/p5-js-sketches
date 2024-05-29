function setup() {
    createCanvas(windowWidth, windowHeight); // a canva with window Width and Height
}

let h; // see the note at the bottom
function draw() {
    background(200); // background to cover

    h = Math.sqrt((100*100)-(50*50)); // see the note at the bottom
    
    if(keyIsDown(65)){
        fill(255, 0, 255); // purple 
        triangle(100, 100, 150, 50, 200, 100);
    }
    if(keyIsDown(66)){
        fill(255, 102, 0); // RGB for orange
        triangle(250, 250, 300, 200, 350, 250);
    }
    if(mouseIsPressed){
        noFill(); // no fill
        triangle(mouseX, mouseY - h/2, mouseX-50, mouseY + h/2, mouseX+50, mouseY + h/2);
        // coordinate
    }
}

//      /|\
//  100/ | \100
//    /  |  \
//    -------    
//      100         
//  
//  a^2 + b^2 = c^2
//  base is 100, 100 / 2 = 50
//  50^2 + h^2 = 100^2
//  h^2 = 100^2 - 50^2
//  Math.sqrt(h^2) / 2  is the top xy to the distance of the center
// 