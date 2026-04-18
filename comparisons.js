// Pega o tempo do relacionamento
function getRelationshipTime() {
  const startDate = new Date(2025, 3, 18, 12, 0, 0);
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = days / 365;

  return { days, months, years };
}

// Gera comparações
function generateComparisons() {
  const { days, months, years } = getRelationshipTime();

  const moonCycles = Math.floor(days / 27);
  const seasons = Math.floor(months / 3);
  const heartbeats = Math.floor(days * 24 * 60 * 70);

  return [
    {
      title: `Em ${months} meses...`,
      main: `O mundo já mudou de estação ${seasons} vezes`,
      sub: `e em todas elas nós ficamos juntos.`
    },
    {
      title: `Em ${days} dias...`,
      main: `O meu coração já bateu mais de ${heartbeats.toLocaleString()} vezes`,
      sub: `e cada uma delas foi para você.`
    },
    {
      title: `Em ${years.toFixed(1)} anos...`,
      main: `O tempo continuou seguindo, como sempre faz`,
      sub: `mas o que eu sinto por você nunca mudou.`
    },
    {
      title: `em ${days} dias...`,
      main: `A Lua já passou por cerca de ${Math.floor(days / 29.5)} fases`,
      sub: `Ela sempre muda, mas nunca perde o brilho, assim como você.`
    },
    {
  main: "",
  sub: `
    <span class="line">Esse site é eterno, assim como o meu amor por você</span>
    <span class="line highlight">Enquanto eu existir, ele vai existir</span>
    <span class="line highlight final-love">eu te amo <span class="rubi">Rubi</span> e vou continuar te amando para todo sempre</span>
  `
}
  ];
}

// Renderiza na tela
function renderComparisons() {
  const container = document.getElementById("comparisons");
  const data = generateComparisons();

  container.innerHTML = "";

  data.forEach((item, index) => {
    const section = document.createElement("section");
    section.classList.add("comparison-section");

    // 👉 Última seção (especial)
    if (index === data.length - 1) {
      section.classList.add("final-section");
    }

    section.innerHTML = `
  <div class="final-box">
    ${item.title ? `<p class="comp-title">${item.title}</p>` : ""}
    <p class="comp-title">${item.main}</p>
    <p class="comp-sub">${item.sub}</p>
  </div>
`;

    container.appendChild(section);
  });
}

// Inicializa
renderComparisons();

// Atualiza a cada minuto
setInterval(renderComparisons, 60000);