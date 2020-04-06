function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
}

Circle.prototype.draw = function () {
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  context.fillStyle = this.color;
  context.fill();
};

Circle.prototype.update = function () {
  if (this.x + this.radius >= innerWidth || this.x - this.radius <= 0) {
    this.dx = -this.dx;
  }
  if (this.y + this.radius >= innerHeight || this.y - this.radius <= 0) {
    this.dy = -this.dy;
  }

  this.x += this.dx;
  this.y += this.dy;

  //interactivity

  if (
    mouse.x - this.x < minDistance &&
    mouse.x - this.x > -minDistance &&
    mouse.y - this.y < minDistance &&
    mouse.y - this.y > -minDistance
  ) {
    if (this.radius < maxRadius) {
      this.radius += 1;
    }
  } else if (this.radius > this.minRadius) {
    this.radius -= 1;
  }

  this.draw();
};
export default Circle;
