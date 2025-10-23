var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
canvas.parent('p5-canvas-container');
    background(0);
    angleMode(DEGREES);
    colorMode(HSL, 360, 100, 100, 100);
}

function drawFractalLine(len) {
  

  line(0, 0, 0, -len);
  

  translate(0, -len);
  

  if (len > 4) { 
    

    push(); 
    rotate(25);
    drawFractalLine(len * 0.75); 
    pop(); 
    

    push(); 
    rotate(-25);
    drawFractalLine(len * 0.77); 
    pop(); 
  }
}


function draw() {

    background(0, 0, 0, 15);

    let currentHue = frameCount % 360; 
    stroke(currentHue, 80, 60)
   /*  FRACTAL BRANCH */
    strokeWeight(0.2);
    noFill();


    push(); 
    translate(width / 2.5, height); 


    let rotationAngle = sin(frameCount * 1) * 20; 
    rotate(rotationAngle);
    

    drawFractalLine(height / 3.5); 

    pop(); 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0,0,0); 
}