let breezes, numberOfBreezes, backgroundColor;

function setup() {
  initGlobals();
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);
  initBreezes();
}

function draw() {
  for (let i = 0; i < breezes.length; i++) {
    let b = breezes[i];
    b.show();
    b.changeColor();
    b.move();
  }
}

class Breeze {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.breezeColor = floor(random(255));
    this.mov = 10;
  }

  show() {
    noStroke();
    fill(this.breezeColor);
    ellipse(this.x, this.y, this.r);
  }

  move() {
    this.x += random(-this.mov, this.mov);
    this.y += random(-this.mov, this.mov);

    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.x = width / 2;
      this.y = height = 2;
    }
  }

  changeColor() {
    this.breezeColor += random(-1, 1);
    if (this.breezeColor > 255 || this.breezeColor < 0) {
      this.breezeColor = 127;
    }
  }
}

const initGlobals = () => {
  breezes = [];
  numberOfBreezes = 500;
  backgroundColor = 245;
};

const initBreezes = () => {
  for (let i = 0; i < numberOfBreezes; i++) {
    let breeze = new Breeze(width / 2, height / 2);
    breezes.push(breeze);
  }
};
