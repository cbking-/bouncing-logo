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

// let tlh = 0, trh = 0, blh = 0, brh = 0;

// function gcd(a, b) {
//   var temp;
//   if (a < 0) { a = -a; };
//   if (b < 0) { b = -b; };
//   if (b > a) { temp = a; a = b; b = temp; };
//   while (true) {
//     a %= b;
//     if (a == 0) { return b; };
//     b %= a;
//     if (b == 0) { return a; };
//   };
//   return b;
// }

// function lcm(a, b) {
//   return Math.abs(a * b) / gcd(a, b);
// }

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

  // var W0 = windowWidth - img.width;
  // var H0 = windowHeight - img.width;

  // console.log('W0 ' + W0);
  // console.log('H0 ' + H0);
  // console.log('gcd ' + gcd(W0, H0));
  // console.log('lcm w h ' + lcm(W0, H0));

  // if (Math.abs(x - y) % gcd(W0, H0) == 0) {
  //   // corners will be reached
  //   if ((Math.abs(x - y) / gcd(W0, H0)) % 2 == 0) {
  //     console.log((lcm(W0, H0) / H0) % 2 == 0 ? 'T' : 'B');
  //     console.log((lcm(W0, H0) / W0) % 2 == 0 ? 'L' : 'R');

  //     console.log('T');
  //     console.log('L');

  //   } else {
  //     console.log((lcm(W0, H0) / H0) % 2 != 0 ? 'T' : 'B');
  //     console.log((lcm(W0, H0) / W0) % 2 != 0 ? 'L' : 'R');

  //     console.log('B');
  //     console.log('R');
  //   }
  // } else {
  //   console.log("No corner!");
  // }
}

function pickColor() {
  colors = [
    [255, 0, 0],
    [255, 255, 0],
    [127, 255, 0],
    [255, 127, 0],
    [255, 0, 255],
    [255, 0, 127],
    [127, 0, 255],
    [0, 255, 0],
    [0, 255, 255],
    [0, 255, 127],
    [0, 127, 255],
    [0, 0, 255]
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

  // fill(255);
  // text(tlh, x - 10, y);
  // text(trh, x + img.width + 5, y);
  // text(blh, x - 10, y + img.height + 10);
  // text(blh, x + img.width + 5, y + img.height + 10);

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

  // if ((x + img.width >= width) && (y + img.height >= height))
  // {
  // 	brh += 1;
  // }
  // else if((x + img.width >= width) && (y <= 0))
  // {
  // 	blh += 1;
  // }
  // else if((x <= 0) && (y + img.height >= height))
  // {
  // 	trh += 1
  // }
  // else if ((x <= 0) && (y <= 0))
  // {
  // 	tlh += 1;
  // }
}
