function construtorCarta(nome, livro, cap, vers, ano) {
  return {
    nome: nome,
    atributos: {
      livro: livro,
      capítulos: cap,
      versículos: vers,
      ano: ano
    }
  };
}

const cartas = [
  construtorCarta("Gênesis", 1, 50, 1533, -1513),
  construtorCarta("Êxodo", 2, 40, 1213, -1512),
  construtorCarta("Levítico", 3, 27, 859, -1512),
  construtorCarta("Números", 4, 36, 1288, -1473),
  construtorCarta("Deuteronômio", 5, 34, 959, -1473),
  construtorCarta("Josué", 6, 24, 658, -1450),
  construtorCarta("Juízes", 7, 21, 619, -1050),
  construtorCarta("Rute", 8, 4, 85, -1010),
  construtorCarta("1 Samuel", 9, 31, 811, -722),
  construtorCarta("2 Samuel", 10, 24, 695, -1010),
  construtorCarta("1 Reis", 11, 22, 817, -560),
  construtorCarta("2 Reis", 12, 25, 719, -562),
  construtorCarta("1 Crônicas", 13, 29, 942, -500),
  construtorCarta("2 Crônicas", 14, 36, 822, -500),
  construtorCarta("Esdras", 15, 10, 280, -458),
  construtorCarta("Neemias", 16, 13, 406, -420),
  construtorCarta("Ester", 17, 10, 167, -500),
  construtorCarta("Jó", 18, 42, 1070, -1600),
  construtorCarta("Salmos", 19, 150, 2461, -900),
  construtorCarta("Provérbios", 20, 31, 915, -700),
  construtorCarta("Eclesiastes", 21, 12, 222, -1000),
  construtorCarta("Cantares", 22, 8, 117, -931),
  construtorCarta("Isaías", 23, 66, 1292, -740),
  construtorCarta("Jeremias", 24, 52, 1364, -605),
  construtorCarta("Lamentações", 25, 5, 154, -586),
  construtorCarta("Ezequiel", 26, 48, 1273, -571),
  construtorCarta("Daniel", 27, 12, 357, -530),
  construtorCarta("Oséias", 28, 14, 197, -760),
  construtorCarta("Joel", 29, 3, 73, -800),
  construtorCarta("Amós", 30, 9, 146, -760),
  construtorCarta("Obadias", 31, 1, 21, -586),
  construtorCarta("Jonas", 32, 4, 48, -844),
  construtorCarta("Miquéias", 33, 7, 105, -716),
  construtorCarta("Naum", 34, 3, 47, -612),
  construtorCarta("Habacuque", 35, 3, 56, -625),
  construtorCarta("Sofonias", 36, 3, 53, -622),
  construtorCarta("Ageu", 37, 2, 38, -520),
  construtorCarta("Zacarias", 38, 14, 211, -518),
  construtorCarta("Malaquias", 39, 4, 55, -500),
  construtorCarta("Mateus", 1, 28, 1071, 70),
  construtorCarta("Marcos", 2, 16, 678, 65),
  construtorCarta("Lucas", 3, 24, 1151, 59),
  construtorCarta("João", 4, 21, 879, 80),
  construtorCarta("Atos", 5, 28, 1007, 61),
  construtorCarta("Romanos", 6, 16, 433, 55),
  construtorCarta("1 Coríntios", 7, 16, 437, 56),
  construtorCarta("2 Coríntios", 8, 13, 256, 56),
  construtorCarta("Gálatas", 9, 6, 149, 55),
  construtorCarta("Efésios", 10, 6, 155, 60),
  construtorCarta("Filipenses", 11, 4, 104, 60),
  construtorCarta("Colossenses", 12, 4, 95, 60),
  construtorCarta("1 Tessalonicenses", 13, 5, 89, 50),
  construtorCarta("2 Tessalonicenses", 14, 3, 47, 51),
  construtorCarta("1 Timóteo", 15, 6, 113, 62),
  construtorCarta("2 Timóteo", 16, 4, 83, 66),
  construtorCarta("Tito", 17, 3, 46, 62),
  construtorCarta("Filemon", 18, 1, 25, 60),
  construtorCarta("Hebreus", 19, 13, 303, 64),
  construtorCarta("Tiago", 20, 5, 108, 48),
  construtorCarta("1 Pedro", 21, 5, 105, 63),
  construtorCarta("2 Pedro", 22, 3, 61, 65),
  construtorCarta("1 João", 23, 5, 105, 80),
  construtorCarta("2 João", 24, 1, 13, 90),
  construtorCarta("3 João", 25, 1, 15, 90),
  construtorCarta("Judas", 26, 1, 25, 65),
  construtorCarta("Apocalipse", 27, 22, 404, 90)
];
const pontuacaoMax = cartas.length;
//const pontuacaoMax = 4;
let cartaPC, cartaJogador;
let pontuacao = parseInt(pontuacaoMax / 2);

function exibirPontuacao() {
  document.getElementById("pontuacao").innerHTML =
    "<h2>Pontuação: " + pontuacao + "</h2>";
}

function calculaPontuacao(vencedor) {
  if (vencedor === "jogador") {
    pontuacao++;
  } else if (vencedor === "pc") {
    pontuacao--;
  }
}

function sortearCarta() {
  document.getElementById("resultado").innerHTML = "";
  const numeroCartaPC = parseInt(Math.random() * cartas.length);
  cartaPC = cartas[numeroCartaPC];

  let numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaJogador === numeroCartaPC) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirPontuacao();
  exibirOpcoes();
}

function exibirOpcoes() {
  const opcoes = document.getElementById("opcoes");
  let cartaTexto = "<p><b>Sua Carta</b></br>" + cartaJogador.nome;
  let opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    cartaTexto +=
      "</br>" +
      atributo.charAt(0).toUpperCase() +
      atributo.slice(1) +
      ": " +
      cartaJogador.atributos[atributo];
    opcoesTexto +=
      '<input type="radio" name="atributo" value="' +
      atributo +
      '">' +
      atributo;
  }
  cartaTexto += "</p>";
  opcoes.innerHTML = cartaTexto + opcoesTexto;
}

function obterAtributoSelecionado() {
  const radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  const atributoSelecionado = obterAtributoSelecionado();
  let vencedor;

  if (
    atributoSelecionado === "capítulos" ||
    atributoSelecionado === "versículos"
  ) {
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaPC.atributos[atributoSelecionado]
    ) {
      vencedor = "jogador";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaPC.atributos[atributoSelecionado]
    ) {
      vencedor = "pc";
    } else {
      vencedor = "empate";
    }
  } else {
    if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaPC.atributos[atributoSelecionado]
    ) {
      vencedor = "jogador";
    } else if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaPC.atributos[atributoSelecionado]
    ) {
      vencedor = "pc";
    } else {
      vencedor = "empate";
    }
  }

  calculaPontuacao(vencedor);
  exibirPontuacao();
  exibirCartas(atributoSelecionado, vencedor);
  telaReset();
}

function atributoHTML(
  carta,
  atributo,
  atributoSelecionado,
  vencedor,
  competidor
) {
  if (atributo === atributoSelecionado) {
    if (vencedor === competidor) {
      return (
        "</br><span class='vencedor'>" +
        atributo.charAt(0).toUpperCase() +
        atributo.slice(1) +
        ": " +
        carta.atributos[atributo] +
        "</span>"
      );
    } else if (vencedor === "empate") {
      return (
        "</br><span class='empate'>" +
        atributo.charAt(0).toUpperCase() +
        atributo.slice(1) +
        ": " +
        carta.atributos[atributo] +
        "</span>"
      );
    } else {
      return (
        "</br><span class='perdedor'>" +
        atributo.charAt(0).toUpperCase() +
        atributo.slice(1) +
        ": " +
        carta.atributos[atributo] +
        "</span>"
      );
    }
  } else {
    return (
      "</br>" +
      atributo.charAt(0).toUpperCase() +
      atributo.slice(1) +
      ": " +
      carta.atributos[atributo]
    );
  }
}

function exibirCartas(atribudoSelecionado, vencedor) {
  const resultado = document.getElementById("resultado");
  let cartaTextoJogador =
    "<div><b>Carta Do Jogador</b></br>" + cartaJogador.nome;
  let cartaTextoPC = "<div><b>Carta Do PC</b></br>" + cartaPC.nome;

  for (var atributo in cartaJogador.atributos) {
    cartaTextoJogador += atributoHTML(
      cartaJogador,
      atributo,
      atribudoSelecionado,
      vencedor,
      "jogador"
    );
  }
  cartaTextoJogador += "</div>";

  for (var atributo in cartaPC.atributos) {
    cartaTextoPC += atributoHTML(
      cartaPC,
      atributo,
      atribudoSelecionado,
      vencedor,
      "pc"
    );
  }
  cartaTextoPC += "</div>";
  resultado.innerHTML = cartaTextoJogador + cartaTextoPC;
}

function telaReset() {
  document.getElementById("opcoes").innerHTML = "";
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  if (pontuacao === 0) {
    alert(
      "Você perdeu para o Computador, pois zerou a pontuação! Para começar novamente, clique em Sortear carta."
    );
    pontuacao = parseInt(pontuacaoMax / 2);
  } else if (pontuacao === pontuacaoMax) {
    alert(
      "Você venceu o Computador, pois chegou à pontuação máxima! Para começar novamente, clique em Sortear carta."
    );
    pontuacao = parseInt(pontuacaoMax / 2);
  }
}
