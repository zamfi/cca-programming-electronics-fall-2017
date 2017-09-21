background(255);
strokeWeight(3);
colorMode(HSB);

while (true) {
  var h = random(360)
  stroke(h, 50, 90);
  fill(h, 50, 100);

  var r = random(30, 60);
  ellipse(random(width), random(height), r, r);
}