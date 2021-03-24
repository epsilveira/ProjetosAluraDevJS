function mentalista(max, tent) {
  const numeroSecreto = parseInt(Math.random() * (max + 1));
  let tentativas = tent;

  while (tentativas) {
    const palpite = parseInt(
      prompt(
        "Digite um número entre 0 e " +
          max +
          " (inclusive)\nTentativa restantes: " +
          tentativas
      )
    );

    if (numeroSecreto === palpite) {
      alert("Acertou!");
      return [numeroSecreto, tentativas - 1];
    } else if (palpite > numeroSecreto) {
      alert("O número secreto é menor.");
    } else if (palpite < numeroSecreto) {
      alert("O número secreto é maior.");
    }
    tentativas -= 1;
  }
  return [numeroSecreto, tentativas - 1];
}

function jogar() {
  let num = 0;
  let tent = 3;
  let level = 1;
  let multiplicador = 1;
  while (tent > 0) {
    [num, tent] = mentalista(level * 10, parseInt(tent));
    if (tent < 0) {
      alert("Suas tentativas acabaram! O número secreto era " + num);
    } else if (tent > 0) {
      alert(
        "Parece que foi muito fácil pra você, pois sobraram " +
          tent +
          " tentativas. Vamos aumentar a dificuldade!"
      );
      level += 1;
      multiplicador *= 1.05;
      tent += level + multiplicador;
    }
  }
}

jogar();
document.write(
  '<button type="button" class="botao-jogar-novamente" onClick="jogar()">Jogar novamente</button>'
);
