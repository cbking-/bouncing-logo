// Based off of
// Bouncing img Logo
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/131-bouncing-img-logo.html
// https://youtu.be/0j86zuqqTlQ
// https://editor.p5js.org/codingtrain/sketches/Ya1K1ngtFk

let x;
let y;
let xspeed;
let yspeed;
let img;
let r, g, b;

function preload() {
  img = loadImage("sleeves.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = floor(random(width));
  y = floor(random(height));
  xspeed = width / 600;
  yspeed = height / 600;
  pickColor();  
}

function pickColor() {
  colors = [
    [255, 0, 0],    //red
    [255, 255, 0],  //yellow
    [127, 255, 0],  //chartreuse
    [255, 127, 0],  //orange
    [255, 0, 255],  //fuchsia
    [255, 0, 127],  //pink
    [127, 0, 255],  //purple
    [0, 255, 0],    //green
    [0, 255, 255],  //cyan
    [0, 255, 127],  //spring green
    [0, 127, 255],  //azure
    [0, 0, 255]     //blue
  ];

  do {
    color = colors[Math.floor(Math.random() * colors.length)];
  } while (r == color[0] && g == color[1] && b == color[2])

  r = color[0];
  g = color[1];
  b = color[2];
}

function draw() {
  clear();
  tint(r, g, b);
  image(img, x, y);

  x = x + xspeed;
  y = y + yspeed;

  if (x + img.width >= width) {
    xspeed = -xspeed;
    x = width - img.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + img.height >= height) {
    yspeed = -yspeed;
    y = height - img.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }  
}
