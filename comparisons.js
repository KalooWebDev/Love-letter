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
      title: `em ${days} dias...`,
      main: `a Lua já completou cerca de ${moonCycles} ciclos`,
      sub: `ela está sempre voltando, como eu volto para o seus braços`
    },
    {
      title: `em ${months} meses...`,
      main: `o mundo já mudou de estação ${seasons} vezes`,
      sub: `e em todas elas nós ficamos juntos`
    },
    {
      title: `em ${days} dias...`,
      main: `o meu coração já bateu mais de ${heartbeats.toLocaleString()} vezes`,
      sub: `e cada uma delas foi para você`
    },
    {
      title: `em ${years.toFixed(1)} anos...`,
      main: `o tempo continuou seguindo, como sempre faz`,
      sub: `mas o que eu sinto por você nunca mudou`
    },
    {
      title: `em ${months} meses...`,
      main: `tantas coisas poderiam ter mudado`,
      sub: `mas ainda é você quem eu quero ao meu lado e sempre vou querer`
    },

   {
  main: "",
  sub: `
    <span class="line">a melhor parte do meu tempo</span>
    <span class="line highlight">É com você</span>
    <span class="line highlight final-love">eu te amo, <span class="rubi">Rubi</span> e vou continuar te amando para todo sempre</span>
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
    <h2 class="comp-main">${item.main}</h2>
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