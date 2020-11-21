function setup() {
  createCanvas(500, 500);
  noStroke();
  background(0);  
  fill(0);  
}

var ballX = 100;
var ballY = 100;

var ballXV = -5;
var ballYV = 10;

var rectX = 10;
var rectY = 10;

var lives = 3;

var player = "PlayerOne ";

var setShapes = setShapesOne

//
function draw() {
  rect(300,30,50,50);
  background(200);  
  setText();
  setShapes();    
  bounceCheck();
  increment();
  scoreCheck();  
}

function increment() {  
  ballX += ballXV;  
  ballY += ballYV;
  
  if(millis() % 1000 == 0) {
    ballXV = ballXV * 2;
  }
}

function mouseMoved() {
  rectY = mouseY;
}

function ball(x, y) {
  ellipse(x - 2, y, 30, 30);
  ellipse(x, y, 15, 15);
}

function setShapesOne() {
  fill(0);
  rect(rectX, rectY, 10, 40);
  ball(ballX, ballY);
}

function setShapesTwo() {
  fill(245, 123, 158);
  rect(rectX, rectY, 10, 40);
  ball(ballX, ballY);
}

function sliderBounce() {
  if(rectY < ballY && rectY + 100 > ballY) {
    ballXV = ballXV * -1;
    lives += 1;
  }
}

function wallBounce() {
  ballXV = ballXV * -1;
}

function bounceCheck() {
  if(ballY < 0 || ballY > 500) {
    ballYV = ballYV * -1;
  }
  
  if(ballX < 40 && ballXV < 0) {
    sliderBounce();
  }
  
  if(ballX > 500 && ballXV > 0) {
    wallBounce();
  }
  
  if(ballX < 0) {
    ballX = 500;
    lives -= 1;
  }
}

function scoreCheck() {
  if(lives == 0 && player == "PlayerOne ") {
    player = "PlayerTwo ";
    setShapes = setShapesTwo; 
    lives = 3;
  }
  
  if(lives == 0 && player == "PlayerTwo ") {
    player = "PlayerOne ";
    setShapes = setShapesOne; 
    lives = 3;
  }
  
  if(lives == 10 && player == "PlayerOne ") {
    player = "PlayerTwo ";
    setShapes = setShapesTwo; 
    lives = 3;
  }
  
  if(lives == 10 && player == "PlayerTwo ") {
    player = "PlayerOne ";
    setShapes = setShapesOne; 
    lives = 3;
  }
}

function setText() {
  textAlign(LEFT);
  textSize(18); 
  text(player + lives, 10, 25);
}
