var box;

function setup() {
  createCanvas(500, 500);
  box = createSprite(250,250,50,50);
  box.shapeColor = "black"

}

function draw() {
  background("#1fcc92");

  if (keyDown("up")) {
    box.y -=3
  }

  if (keyIsDown(DOWN_ARROW)) {
    box.y +=3
  }

  if (keyDown("space")) {
    background("yellow");
  }

  drawSprites();
}

