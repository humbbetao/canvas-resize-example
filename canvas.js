var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");

// Rectangle
context.fillStyle = "rgba(255, 0, 0, 0.5)";
context.fillRect(100, 100, 100, 100);

context.fillStyle = "rgba(255, 0, 255, 0.1)";
context.fillRect(100, 500, 100, 100);

context.fillStyle = "rgba(255, 255, 0, 0.5)";
context.fillRect(400, 300, 100, 100);

// Line
context.beginPath();
context.moveTo(50, 300);
context.lineTo(300, 100);
context.lineTo(400, 300);
context.strokeStyle = "blue";
context.stroke();

// Arc/Circle
// context.beginPath();
// context.arc(300, 300, 30, 0, Math.PI * 2, false);
// context.strokeStyle = "green";
// context.stroke();

for (let i = 0; i < 100; i++) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  context.beginPath();
  context.arc(x, y, 30, 0, Math.PI * 2, false);
  context.strokeStyle = "green";
  context.stroke();
}
