let brlToUSD = 0;
let usdToBRL = 0;
let brlToEUR = 0;
let eurToBRL = 0;
let brlToBTC = 0;
let btcToBRL = 0;

const convert = document.querySelector(".conversor");

const apiURL = "https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL";
const request = new XMLHttpRequest();
request.open("GET", apiURL, false);
request.send();
const responseText = request.responseText;
const response = JSON.parse(responseText);

if (response.status == undefined) {
  const cotacaoDolar = response.USD.bid;
  usdToBRL = cotacaoDolar;
  brlToUSD = 1 / cotacaoDolar;

  const cotacaoEuro = response.EUR.bid;
  eurToBRL = cotacaoEuro;
  brlToEUR = 1 / cotacaoEuro;

  //const cotacaoBTC = response.BTC.bid;
  const cotacaoBTC = 242301.79;
  btcToBRL = cotacaoBTC;
  brlToBTC = 1 / cotacaoBTC;

  inputElement = document.getElementById("valueBRL");
  inputElement.value = "1.00";
  inputElement = document.getElementById("valueUSD");
  inputElement.value = parseFloat(brlToUSD).toFixed(2);
  inputElement = document.getElementById("valueEUR");
  inputElement.value = parseFloat(brlToEUR).toFixed(2);
  inputElement = document.getElementById("valueBTC");
  inputElement.value = parseFloat(brlToBTC).toFixed(8);
} else {
  console.log(response);
  alert("Erro interno");
}

convert.addEventListener("input", listenerInputChange);

function convertBRL(event, conv) {
  return (parseFloat(event.target.value.replace(",", ".")) * conv).toFixed(2);
}

function convertCoins(brl, conv) {
  return parseFloat(brl * conv);
}

function insertValue(convertedValue, element) {
  if (isNaN(convertedValue)) {
    element.value = "";
  } else {
    element.value = convertedValue;
  }
}

function listenerInputChange(event) {
  let brl = 0;
  if (event.target.name == "valorBRL") {
    brl = parseFloat(event.target.value.replace(",", "."));
    insertValue(
      convertCoins(brl, brlToUSD).toFixed(2),
      document.getElementById("valueUSD")
    );
    insertValue(
      convertCoins(brl, brlToEUR).toFixed(2),
      document.getElementById("valueEUR")
    );
    insertValue(
      convertCoins(brl, brlToBTC).toFixed(8),
      document.getElementById("valueBTC")
    );
  } else if (event.target.name == "valorUSD") {
    brl = convertBRL(event, usdToBRL);
    insertValue(brl, document.getElementById("valueBRL"));
    insertValue(
      convertCoins(brl, brlToEUR).toFixed(2),
      document.getElementById("valueEUR")
    );
    insertValue(
      convertCoins(brl, brlToBTC).toFixed(8),
      document.getElementById("valueBTC")
    );
  } else if (event.target.name == "valorEUR") {
    brl = convertBRL(event, eurToBRL);
    insertValue(brl, document.getElementById("valueBRL"));
    insertValue(
      convertCoins(brl, brlToUSD).toFixed(2),
      document.getElementById("valueUSD")
    );
    insertValue(
      convertCoins(brl, brlToBTC).toFixed(8),
      document.getElementById("valueBTC")
    );
  } else if (event.target.name == "valorBTC") {
    brl = convertBRL(event, btcToBRL);
    insertValue(brl, document.getElementById("valueBRL"));
    insertValue(
      convertCoins(brl, brlToUSD).toFixed(2),
      document.getElementById("valueUSD")
    );
    insertValue(
      convertCoins(brl, brlToEUR).toFixed(2),
      document.getElementById("valueEUR")
    );
  }
}