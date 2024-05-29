function setup(){
    createCanvas(800, 800);
}

function draw() {
    background(220);
    if(mouseIsPressed){
        let colors = [ // all different colors
            [255, 0, 0],
            [255, 255, 0],
            [255, 255, 255],
            [0, 255, 0],
            [0, 255, 255]
        ];

        // Although we can see from the program that 
        // the largest one is generated first,
        // The reason for doing this is to prevent
        // the largest coverage from being generated in front.
        for (let i = 5; i > 0; i--) { // spawn 5, 
            fill(colors[i-1]);
            circle(mouseX, mouseY, i*10); // Gradually became bigger
        }
    }
}
