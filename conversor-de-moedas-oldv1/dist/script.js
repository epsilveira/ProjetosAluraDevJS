let brlToUSD = 0;
let usdToBRL = 0;

const convert = document.querySelector(".conversor");

const apiURL = "https://economia.awesomeapi.com.br/all/USD-BRL";
const request = new XMLHttpRequest();
request.open("GET", apiURL, false);
request.send();
const responseText = request.responseText;
const response = JSON.parse(responseText);
if (response.status == undefined) {
  const cotacaoDolar = response.USD.bid;

  usdToBRL = cotacaoDolar;
  brlToUSD = 1 / cotacaoDolar;
  inputElement = document.getElementById("valueUSD");
  inputElement.value = "1.00";
  inputElement = document.getElementById("valueBRL");
  inputElement.value = parseFloat(cotacaoDolar).toFixed(2);
} else {
  console.log(response);
  alert("Erro interno");
}

convert.addEventListener("input", listenerInputChange);

function listenerInputChange(event) {
  let conv = 0;
  if (event.target.name == "valorUSD") {
    inputElement = document.getElementById("valueBRL");
    conv = usdToBRL;
  } else {
    inputElement = document.getElementById("valueUSD");
    conv = brlToUSD;
  }

  const convertedValue = (
    parseFloat(event.target.value.replace(",", ".")) * conv
  ).toFixed(2);

  if (isNaN(convertedValue)) {
    inputElement.value = "";
  } else {
    inputElement.value = convertedValue;
  }
}