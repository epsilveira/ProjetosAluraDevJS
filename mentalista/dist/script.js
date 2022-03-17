//Inicialização
let num = 0;
let tent = 3;
let level = 1;
let max = level * 10;
let multiplicador = 1;
let numeroSecreto = parseInt(Math.random() * (max + 1));

function JogarNovamente() {
  // Função para alterar o botão quando quando perde, para resetar o jogo

  //document.write('<button type="button" class="botao-jogar-novamente" onClick="restart()">Jogar novamente</button>');
  let elemBotao = document.getElementById("botao");
  elemBotao.firstChild.data = "Jogar novamente";
  elemBotao.onclick = restart;
}

function Chutar() {
  // Função do botão chutar

  // console.log("NS: " + numeroSecreto);
  //document.getElementById("valor").value = "";
  let chute = parseInt(document.getElementById("valor").value);
  tent -= 1;
  // console.log("Tent restante: " + tent);

  if (numeroSecreto === chute) {
    mentalista(
      true,
      "Acertou!<br>O número secreto era " +
        numeroSecreto +
        "!<br>Você passou do level " +
        level +
        "! Descubra o próximo número."
    );
  } else if (chute > numeroSecreto) {
    mentalista(false, "O número secreto é menor.");
  } else if (chute < numeroSecreto) {
    mentalista(false, "O número secreto é maior.");
  }
}

function mentalista(venceu, txt) {
  //Função com algumas regras de negócio e para modificar a view de acordo com o resultado
  //A ideia é que, se perdeu, muda o botão para jogar novamente
  //Se venceu, sobe de level. Muda o texto da instrução caso a vitória seja com tentativas sobrando
  let elemResultado = document.getElementById("resultado");
  let elemInstrucao = document.getElementById("instrucao");
  if (tent <= 0 && !venceu) {
    elemResultado.innerHTML =
      "Suas tentativas acabaram! O número secreto era " +
      numeroSecreto +
      "<br>Você chegou ao level: " +
      level;
    elemInstrucao.innerHTML =
      "Você perdeu :/<br><br>Tentativa restantes: " + tent;
    JogarNovamente();
  } else if (tent == 0 && venceu) {
    elemResultado.innerHTML = txt;
    sobeLevel();
    elemInstrucao.innerHTML =
      "Você venceu na última tentativa!<br>Vamos aumentar a dificuldade, vamos ver se você consegue!<br><br>Digite um número entre 0 e " +
      max +
      " (inclusive)<br>Tentativa restantes: " +
      tent;
  } else {
    elemResultado.innerHTML = txt;
    if (venceu) {
      let tent_atual = tent;
      sobeLevel();
      elemInstrucao.innerHTML =
        "Parece que foi muito fácil pra você, pois sobraram " +
        tent_atual +
        " tentativas.<br>Vamos aumentar a dificuldade!<br><br>Digite um número entre 0 e " +
        max +
        " (inclusive)<br>Tentativa restantes: " +
        tent;
    } else {
      elemInstrucao.innerHTML =
        "Digite um número entre 0 e " +
        max +
        " (inclusive)<br>Tentativa restantes: " +
        tent;
    }
  }
}

function sobeLevel() {
  //Função para continuar o jogo ao vencer
  level += 1;
  multiplicador *= 1.05;
  max = level * 10;
  tent += parseInt(level + multiplicador);
  numeroSecreto = parseInt(Math.random() * (max + 1));
}

function restart() {
  // Função que reseta o jogo. É chamada ao clicar no botão Jogar novamente
  num = 0;
  tent = 3;
  level = 1;
  max = level * 10;
  multiplicador = 1;
  let elemInstrucao = document.getElementById("instrucao");
  let texto =
    "Digite um número entre 0 e " +
    max +
    " (inclusive)<br>Tentativa restantes: " +
    tent;
  elemInstrucao.innerHTML = texto;

  document.getElementById("valor").value = "";

  numeroSecreto = parseInt(Math.random() * (max + 1));

  let elemBotao = document.getElementById("botao");
  elemBotao.firstChild.data = "Chutar";
  elemBotao.onclick = Chutar;

  document.getElementById("resultado").innerHTML = "";
}