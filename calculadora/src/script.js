// Verifica se é um número
function checkEntry(value) {
  let number = parseFloat(value);
  while (isNaN(number)) {
    number = parseFloat(prompt("Você precisa digitar um número!"));
  }
  return number;
}

var firstValue = checkEntry(prompt("Digite o primeiro valor:"));
var secondValue = checkEntry(prompt("Digite o segundo valor:"));
var operation = prompt(
  "Escolha a operação\n\n1 para Soma\n2 para Subtração\n3 para Multiplicação\n4 para Divisão\n5 para Exponenciação\n"
);
var result = 0;
var symbol = "";

if (operation == 1) {
  result = firstValue + secondValue;
  symbol = " + ";
} else if (operation == 2) {
  result = firstValue - secondValue;
  symbol = " - ";
} else if (operation == 3) {
  result = firstValue * secondValue;
  symbol = " X ";
} else if (operation == 4) {
  result = firstValue / secondValue;
  symbol = " / ";
} else if (operation == 5) {
  result = firstValue ** secondValue;
  symbol = " ^ ";
}

symbol === ""
  ? (ret = "Opção inválida")
  : (ret = firstValue + symbol + secondValue + " = " + result.toFixed(2));

//'<span style="color: #ba0000">'
ret.length <= 16
  ? document.write("<h2>" + ret + "</h2>")
  : document.write('<h2 style="font-size: 11px">' + ret + "</h2>");
