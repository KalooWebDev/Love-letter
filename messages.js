const messages = [
  {
    text: "sempre que estou sozinho com você, você me faz sentir em casa novamente",
    author: "— Lovesong — The Cure"
  },
  {
    text: "não importa quão longe eu vá, eu sempre vou te amar",
    author: "— Lovesong — The Cure"
  },
  {
    text: "eu te amarei até que o mundo pare de girar",
    author: "— Love You to Death — Type O Negative"
  },
  {
    text: "me afogo em você, e ainda assim respiro",
    author: "— Love You to Death — Type O Negative"
  },
  {
    text: "às vezes, ficar vivo é a maior coragem",
    author: "— Truce — Twenty One Pilots"
  },
  {
    text: "você não está sozinho nisso",
    author: "— Truce — Twenty One Pilots"
  },
  {
    text: "eu viveria por você, essa não é uma escolha fácil",
    author: "— Ride — Twenty One Pilots"
  },
  {
    text: "eu começaria tudo de novo por você",
    author: "— The Judge — Twenty One Pilots"
  },
  {
    text: "na escuridão, ainda existe algo que nos mantém aqui",
    author: "— Migraine — Twenty One Pilots"
  },

  {
  text: "eu morreria por você, mas isso é pedir demais de mim",
  author: "— Ride — Twenty One Pilots"
},
{
  text: "às vezes, tudo que precisamos é alguém que fique",
  author: "— Truce — Twenty One Pilots"
},
{
  text: "você é a razão pela qual eu ainda tento",
  author: "— Holding On To You — Twenty One Pilots"
},
{
  text: "eu encontrei algo em você que nunca quero perder",
  author: "— Tear In My Heart — Twenty One Pilots"
},
{
  text: "você é a única coisa que me mantém são",
  author: "— Migraine — Twenty One Pilots"
},
{
  text: "mesmo quando eu duvido de tudo, ainda acredito em nós",
  author: "Twenty One Pilots"
},
{
  text: "eu não sei como explicar, mas com você tudo faz sentido",
  author: "Twenty One Pilots"
},
{
  text: "eu continuo voltando pra você, não importa o quanto eu tente fugir",
  author: "Twenty One Pilots"
},
{
  text: "você é a única coisa que faz o caos dentro de mim fazer sentido",
  author: "— Another Life — Motionless in White"
},
{
  text: "se eu pudesse voltar no tempo, eu ainda escolheria você",
  author: "— Another Life — Motionless in White"
},
{
  text: "mesmo no meio da escuridão, eu encontro você",
  author: "— Eternally Yours — Motionless in White"
},
{
  text: "eu vou te amar até o fim dos tempos",
  author: "— Eternally Yours — Motionless in White"
},
{
  text: "se existe algo eterno nesse mundo, é o que eu sinto por você",
  author: "— Eternally Yours — Motionless in White"
}
];

// Troca de mensagem
function updateMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);

  const messageElement = document.querySelector(".message");
  const authorElement = document.querySelector(".author");

  messageElement.style.opacity = 0;
  authorElement.style.opacity = 0;

  setTimeout(() => {
    messageElement.textContent = messages[randomIndex].text;
    authorElement.textContent = messages[randomIndex].author;

    messageElement.style.opacity = 0.85;
    authorElement.style.opacity = 0.6;
  }, 500);
}

// troca a cada 10s
setInterval(updateMessage, 4200);

// primeira execução
updateMessage();