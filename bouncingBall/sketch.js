let x = 8;
let y = 6;
xPos = 300;
yPos = 300;
function setup(){
    createCanvas(600, 600);
    background(225, 225, 225);
}

function draw(){
    background(0, 0, 0);
    ellipse(xPos, yPos, 80, 80);
    //x += 3;
    //y = 70;

    if (xPos < 40 || xPos > 578){
        x = -x;
    }
    
    if (yPos < 40 || yPos > 578){
        y = -y;
    }

    xPos += x;
    yPos += y;


}