var increment = 0.01;
var zOffset = 0;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  var xOffset = 0;
  for (var x = 0; x < width; x += 1) {

    var yOffset = 0;
    for (var y = 0; y < height; y += 1) {
      var index = (x + y * width) * 4;
      var n = map(noise(xOffset, yOffset, zOffset), 0, 1, -1, 1);
      var brightness = map(n*255, -1, 1, 0, 255);
      pixels[index + 0] = brightness;
      pixels[index + 1] = brightness;
      pixels[index + 2] = brightness;
      pixels[index + 3] = 255;
      yOffset += increment;
    }
    xOffset += increment;
  }
  zOffset += increment;
  updatePixels();
}
