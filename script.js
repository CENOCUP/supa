// ============================
// DADOS DO CAMPEONATO (ADMIN)
// ============================

// Jogadores e resultados
const jogadores = [
  { nome: "Player1", v: 3, e: 0, d: 1 },
  { nome: "Player2", v: 2, e: 1, d: 1 },
  { nome: "Player3", v: 1, e: 2, d: 1 },
  { nome: "Player4", v: 0, e: 1, d: 3 },
  { nome: "Player5", v: 2, e: 0, d: 2 }
];

// Partidas importantes (destaques)
const destaques = [
  "Player1 venceu Player3 por 5x2",
  "Player2 empatou com Player5 3x3",
  "Player1 x Player2 será decisiva!"
];

// ============================
// TABELA DE CLASSIFICAÇÃO
// ============================
function gerarTabela() {
  const container = document.getElementById("tabela-container");
  container.innerHTML = "";

  const table = document.createElement("table");
  const header = table.insertRow();
  ["Jogador", "Vitórias", "Empates", "Derrotas", "Pontos"].forEach(text => {
    const th = document.createElement("th");
    th.textContent = text;
    header.appendChild(th);
  });

  // Ordena por pontos
  jogadores.sort((a, b) => (b.v * 3 + b.e) - (a.v * 3 + a.e));

  jogadores.forEach(j => {
    const row = table.insertRow();
    row.insertCell().textContent = j.nome;
    row.insertCell().textContent = j.v;
    row.insertCell().textContent = j.e;
    row.insertCell().textContent = j.d;
    row.insertCell().textContent = j.v * 3 + j.e;
  });

  container.appendChild(table);
}

// ============================
// TOP 3 JOGADORES COM MEDALHAS
// ============================
function gerarTop3() {
  const container = document.getElementById("top3-container");
  container.innerHTML = "";

  const medalhas = ["🥇", "🥈", "🥉"];
  const top3 = jogadores.slice(0, 3);

  top3.forEach((j, i) => {
    const div = document.createElement("div");
    div.className = "medal";
    div.innerHTML = `<div class="medal-img">${medalhas[i]}</div><div>${j.nome}</div>`;
    container.appendChild(div);
  });
}

// ============================
// DESTAQUES DE PARTIDAS
// ============================
function gerarDestaques() {
  const ul = document.getElementById("destaques-list");
  ul.innerHTML = "";
  destaques.forEach(d => {
    const li = document.createElement("li");
    li.textContent = d;
    ul.appendChild(li);
  });
}

// ============================
// CONTAGEM REGRESSIVA
// ============================
function iniciarCountdown() {
  const countdown = document.getElementById("countdown");
  const target = new Date();
  target.setDate(target.getDate() + 7); // exemplo: 7 dias

  setInterval(() => {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
      countdown.textContent = "O campeonato começou!";
      return;
    }
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    countdown.textContent = `Contagem regressiva: ${d}d ${h}h ${m}m ${s}s`;
  }, 1000);
}

// ============================
// INICIALIZAÇÃO
// ============================
gerarTabela();
gerarTop3();
gerarDestaques();
iniciarCountdown();
