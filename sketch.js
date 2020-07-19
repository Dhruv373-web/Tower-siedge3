class box {
  block1 = new Block (330,235,30,40);
  block2 = new Block (360,235,30,40);
  block3 = new Block (390,235,30,40);
  block4 = new Block (420,235,30,40);
  block5 = new Block (450,235,30,40);
  block6 = new Block (360,195,30,40);
  block7 = new Block (3900,235,30,40);
  block8 = new Block (420,235,30,40);
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  var score = 0;

  Text("Score :" + score, 750, 40);

  polygon = Bodies.circle(50,200,20);
  World.add (world,polygon);

  slingshot = new Slingshot (this.polygon, {x:100, y:200});

  imageMode (CENTER)
  image(polygon_img, polygon.position.x, polygon.position.y, 40,40 );
}



function draw() {
  background(255,255,255);  
  drawSprites();
}