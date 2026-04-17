const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];
const numStars = 80;

// Ajustar tamanho do canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Criar estrelas
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.2,
    alpha: Math.random(),
    speed: Math.random() * 0.02
  });
}

// Loop principal
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();

    // Piscar suave
    star.alpha += star.speed;

    if (star.alpha >= 1 || star.alpha <= 0.2) {
      star.speed *= -1;
    }
  }

  requestAnimationFrame(drawStars);
}

drawStars();