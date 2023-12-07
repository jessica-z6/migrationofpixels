let img;
let cnv;

function preload() {
  img = loadImage('assets/migration3.jpg');
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width) / 20;
  let newCanvasY = (windowHeight - img.height) / 20;
  cnv.position(newCanvasX, newCanvasY);
  for (let col = 0; col < img.width; col += 10) {
    for (let row = 0; row < img.height; row += 2) {
      let xPos = col;
      let yPos = row;
      let c = img.get(xPos, yPos);
      push();
      translate(xPos, yPos);
      rotate(radians(random(360)));
      noFill();
      stroke(color(c));
      strokeWeight(random(5));
      curve(xPos, yPos, sin(xPos) * random(60), cos(xPos) * sin(xPos) * random(60), 0, 0,
            cos(yPos) * sin(xPos) * random(140), cos(xPos) * sin(xPos) * 50)
      pop();
    }
  }
}
