function setup() {
    createCanvas(800, 800);
    background(220);
}

let xyed = false; // use for the checker
function draw() {
    let x; // the x coordinate
    let y; // the y coordinate
    if (xyed === true) { // checker for is the xy is spawn (only want it to spawn once)
        x = mouseX;
        y = mouseY;
        xyed = false;
    }

    let colors = [ // all different colors
        [255, 0, 0],
        [255, 255, 0],
        [255, 255, 255],
        [0, 255, 0],
        [0, 255, 255],
        [0, 0, 255],
        [0, 0, 0],
        [125, 125, 125],
        [125, 125, 0],
        [125, 0, 0],
    ];

    for (let i = 0; i < 10; i++) { // spawn 10
        fill(colors[i]);
        rect(x + i * 22, y, 20, 20); // x position + i * 22
    }
}

function mouseClicked() {
    xyed = true; // if the mouseClicked, agree to spawn a new coordinate of xyed
}