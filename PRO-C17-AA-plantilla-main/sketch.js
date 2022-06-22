var box1 

function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(3,4,20,20,+3,+3)
}

function draw() 
{
  background(220);
  box1.show ()
  box1.move()
}

