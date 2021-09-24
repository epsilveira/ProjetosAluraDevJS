let tent = 3;
let level = 1;
let max = level * 10;
let multiplicador = 1;
let numeroSecreto = parseInt(Math.random() * (max + 1));

function NovoJogo() {
  tent = 3;
  level = 1;
  max = level * 10;
  multiplicador = 1;
  numeroSecreto = parseInt(Math.random() * (max + 1));
  //console.log(numeroSecreto);

  const elementoSubtitle = document.getElementById("page-subtitle");
  elementoSubtitle.innerHTML = "Digite um número de 0 a " + max;
  document.getElementById("chutar").innerHTML = "Chutar";
  document.getElementById("chutar").onclick = Chutar;
  document.getElementById("valor").value = "";
  document.getElementById("resultado").innerHTML = "";
}

function NovoLevel() {
  numeroSecreto = parseInt(Math.random() * (max + 1));
  console.log(numeroSecreto);

  const elementoSubtitle = document.getElementById("page-subtitle");
  elementoSubtitle.innerHTML = "Digite um número de 0 a " + max;
  document.getElementById("chutar").innerHTML = "Chutar";
  document.getElementById("chutar").onclick = Chutar;
  document.getElementById("valor").value = "";
  document.getElementById("resultado").innerHTML = "";
}

function Venceu(elementoResultado) {
  //document.getElementById("chutar").disabled = true;

  if (tent <= 0) {
    document.getElementById("chutar").innerHTML = "Jogar Novamente";
    document.getElementById("chutar").onclick = NovoJogo;
    elementoResultado.innerHTML = "Você acertou!";
  } else {
    document.getElementById("chutar").innerHTML = "Próximo Nível";
    document.getElementById("chutar").onclick = NovoLevel;
    elementoResultado.innerHTML =
      "Você acertou!<br>Parece que foi muito fácil pra você,<br>pois sobraram " +
      tent +
      " tentativas.<br>Vamos aumentar a dificuldade!";
    level += 1;
    multiplicador *= 1.05;
    tent = parseInt(tent + level + multiplicador);
    max = level * 10;
  }
}

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  tent -= 1;
  if (chute == numeroSecreto) {
    Venceu(elementoResultado);
  } else if (chute > max || chute < 0) {
    elementoResultado.innerHTML =
      "Você deve digitar um número de 0 a " + max + "!";
    tent += 1;
  } else if (tent > 0) {
    if (chute > numeroSecreto) {
      elementoResultado.innerHTML =
        "O número secreto é menor.<br>Tentativas restantes: " + tent;
    } else {
      elementoResultado.innerHTML =
        "O número secreto é maior.<br>Tentativas restantes: " + tent;
    }
  } else {
    elementoResultado.innerHTML =
      "Suas tentativas acabaram! O número secreto era " + numeroSecreto;
    document.getElementById("chutar").innerHTML = "Jogar Novamente";
    document.getElementById("chutar").onclick = NovoJogo;
  }
}

NovoJogo();