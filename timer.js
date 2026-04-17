// Data de início
const startDate = new Date(2025, 3, 18, 12, 0, 0);

// Função pra calcular tempo real
function getTimeDiff() {
  const now = new Date();
  const diff = now - startDate;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
    minutes: Math.floor(diff / (1000 * 60)) % 60,
    seconds: Math.floor(diff / 1000) % 60
  };
}

// Atualização normal (SEM animação)
function updateTimer() {
  const { days, hours, minutes, seconds } = getTimeDiff();

  const years = Math.floor(days / 365);

  const daysEl = document.querySelector(".days");

  // Se tiver pelo menos 1 ano
  if (years >= 1) {
    const yearText = years === 1 ? "ano" : "anos";
    daysEl.innerHTML = `${days} dias <span class="years">(${years} ${yearText} juntos)</span>`;
  } else {
    daysEl.textContent = `${days} dias`;
  }

  document.querySelector(".time").textContent =
    `${hours}h • ${minutes}m • ${seconds}s`;
}

// Animação inicial
function animateCounter() {
  const target = getTimeDiff();

  let current = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  const duration = 1500;
  const startTime = performance.now();

  function animate(now) {
    const progress = Math.min((now - startTime) / duration, 1);

    const ease = 1 - Math.pow(1 - progress, 3);

    current.days = Math.floor(target.days * ease);
    current.hours = Math.floor(target.hours * ease);
    current.minutes = Math.floor(target.minutes * ease);
    current.seconds = Math.floor(target.seconds * ease);

    document.querySelector(".days").textContent = `${current.days} dias`;
    document.querySelector(".time").textContent =
      `${current.hours}h • ${current.minutes}m • ${current.seconds}s`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      updateTimer();
      setInterval(updateTimer, 1000);
    }
  }

  requestAnimationFrame(animate);
}

// Inicia
animateCounter();