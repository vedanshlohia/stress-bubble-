var bubbles = [];

function setup() {
  createCanvas(600,400);
  
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  bubble3 = new Bubble();
  bubble4 = new Bubble();

}

function draw() {
  background(0);
  bubble1.move();
  bubble2.move();
  bubble3.move();
  bubble4.move();
  
  bubble1.display();
  bubble2.display();
  bubble3.display();
  bubble4.display();
}
  
