var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

let mouse = {
  x: undefined,
  y: undefined,
};

const maxRadius = 80;
const minRadius = 2;
const minDistance = 50;

const colorArray = [
  "#35235D",
  "#B8DC3C",
  "#DB2464",
  "#4C49A2",
  "#CB2402",
  "#CB2402",
];
const setMouse = function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
};

const setResize = function (event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
};

window.addEventListener("mousemove", setMouse);
window.addEventListener("resize", setResize);

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

let circleArray = [];
const arrayLength = 800;
let x;
let y;
let radius;
let dx;
let dy;

function init() {
  circleArray = [];
  for (let i = 0; i < arrayLength; i++) {
    radius = Math.random() * 10 + 1;
    x = Math.random() * (innerWidth - radius * 2) + radius;
    y = Math.random() * (innerHeight - radius * 2) + radius;
    dx = Math.random() - 0.5;
    dy = Math.random() - 0.5;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}
function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, innerWidth, innerHeight);
  // circle.update();
  circleArray.forEach((circle) => circle.update());
}

animate();

init();
