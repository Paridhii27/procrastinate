let img

function preload(){
    //img = loadImage("1.png")
}

function setup(){
    let c = createCanvas(800,800); 
    c.parent('canvas-wrapper')
}

function draw(){
    ellipse(mouseX,mouseY,50,50);
    //image(img,mouseX,mouseY,50,50);
}