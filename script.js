document.addEventListener('DOMContentLoaded', () => {
  const jogos = [
    { timeA: "Flamengo", timeB: "Fluminense", data: "28/10/2025", transmissao: "Globo / Premiere" },
    { timeA: "Palmeiras", timeB: "São Paulo", data: "29/10/2025", transmissao: "SporTV" },
    { timeA: "Inter Miami", timeB: "LA Galaxy", data: "30/10/2025", transmissao: "Apple TV+" },
    { timeA: "Real Madrid", timeB: "Barcelona", data: "02/11/2025", transmissao: "ESPN / Star+" },
    { timeA: "Manchester City", timeB: "Liverpool", data: "03/11/2025", transmissao: "TNT Sports" }
  ];

  const lista = document.getElementById('lista-jogos');
  jogos.forEach(jogo => {
    const li = document.createElement('li');
    li.classList.add('card');
    li.innerHTML = `
      <strong>${jogo.timeA}</strong> vs <strong>${jogo.timeB}</strong><br>
      📅 ${jogo.data} | 📺 ${jogo.transmissao}
    `;
    lista.appendChild(li);
  });
});
