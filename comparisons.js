// Pega o tempo do relacionamento
function getRelationshipTime() {
  const startDate = new Date(2025, 3, 18, 12, 0, 0);
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  return { days, months, years };
}

// Gera comparações
function generateComparisons() {
  const { days, months, years } = getRelationshipTime();

  const seasons = Math.floor(months / 3);
  const heartbeats = Math.floor(days * 24 * 60 * 70);

  const now = new Date();

  const isValentine =
    now.getDate() === 12 &&
    now.getMonth() === 5;

  const comparisons = [

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
      title: `Em ${years} ${years === 1 ? "ano" : "anos"}...`,
      main: `O tempo continuou seguindo, como sempre faz`,
      sub: `mas o que eu sinto por você nunca mudou.`
    },

    {
      title: `Em ${days} dias...`,
      main: `A Lua já passou por cerca de ${Math.floor(days / 29.5)} ciclos de fases`,
      sub: `Ela sempre muda, mas nunca perde o brilho, assim como você.`
    }

  ];

  // 💘 aparece SOMENTE em 12/06
  if (isValentine) {
    comparisons.push({
      title: `Nosso dia especial · 12/06 🩷`,
      main: `Hoje é o nosso dia`,
      sub: `
        o primeiro de muitos 
        e mais um pedaço da nossa história
      `
    });
  }

  // 🌌 Final
  comparisons.push({
    main: "",

    sub: `
      <span class="line">
        Esse site é eterno, assim como o meu amor por você
      </span>

      <span class="line highlight">
        Enquanto eu existir, ele vai existir
      </span>

      <span class="line highlight final-love">
        eu te amo <span class="rubi">Rubi</span>
        e vou continuar te amando para todo sempre
      </span>
    `
  });

  return comparisons;
}

// Renderiza
function renderComparisons() {
  const container =
    document.getElementById("comparisons");

  const data =
    generateComparisons();

  container.innerHTML = "";

  data.forEach((item, index) => {

    const section =
      document.createElement("section");

    section.classList.add(
      "comparison-section"
    );

    if (index === data.length - 1) {
      section.classList.add(
        "final-section"
      );
    }

    section.innerHTML = `
      <div class="final-box">

        ${
          item.title
            ? `<p class="comp-title">${item.title}</p>`
            : ""
        }

        ${
          item.main
            ? `<p class="comp-main">${item.main}</p>`
            : ""
        }

        <p class="comp-sub">
          ${item.sub}
        </p>

      </div>
    `;

    container.appendChild(section);

  });
}

// 💘 Tema 12/06
function applySpecialTheme() {

  const now =
    new Date();

  const isValentine =
    now.getDate() === 12 &&
    now.getMonth() === 5;

  document.body.classList.toggle(
    "valentine-theme",
    isValentine
  );

}

// 💘 muda favicon automaticamente
function updateFavicon() {

  const now = new Date();

  const isValentine =
    now.getDate() === 12 &&
    now.getMonth() === 5;

  const icon =
    document.querySelector(
      'link[rel="icon"]'
    );

  if (!icon) return;

  const emoji =
    isValentine
      ? "🩷"
      : "🖤";

  icon.href =
    `data:image/svg+xml,
    <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
      <text y=%22.9em%22 font-size=%2290%22>
        ${emoji}
      </text>
    </svg>`;
}

function updatePage() {
  applySpecialTheme();

  updateFavicon();

  renderComparisons();
}

// Inicializa
updatePage();

// Atualiza sozinho
setInterval(updatePage, 60000);