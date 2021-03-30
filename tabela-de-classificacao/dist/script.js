function construtorJogador(nome) {
  return (jogador = {
    nome: nome,
    partidas: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
}

function adicionarJogador() {
  const nome = document.getElementById("nomeJogador");
  jogadores.push(construtorJogador(nome.value));
  nome.value = "";
  exibirJogadoresNaTela(jogadores);
}

function calculaPontos(jogador) {
  jogador.pontos = jogador.vitorias * 3 + jogador.empates;
}

function calculaPartidas(jogador) {
  jogador.partidas = jogador.vitorias + jogador.empates + jogador.derrotas;
}

function adicionarVitoria(i) {
  jogadores[i].vitorias++;
  exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  jogadores[i].empates++;
  exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  jogadores[i].derrotas++;
  exibirJogadoresNaTela(jogadores);
}

function exibirJogadoresNaTela(jogadores) {
  let html = "";
  for (var i = 0; i < jogadores.length; i++) {
    calculaPontos(jogadores[i]);
    calculaPartidas(jogadores[i]);
    html += "<tr>";
    html += "<td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].partidas + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";
    html += "<td>";
    html += '<button onClick="adicionarVitoria(' + i + ')">Vitória</button>';
    html += '<button onClick="adicionarEmpate(' + i + ')">Empate</button>';
    html += '<button onClick="adicionarDerrota(' + i + ')">Derrota</button>';
    html += "</td>";
    html += "</tr>";
  }
  let tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = html;
}

let jogadores = [];

// let jogadores = [construtorJogador("Paulo"), construtorJogador("Rafa")];
// exibirJogadoresNaTela(jogadores);