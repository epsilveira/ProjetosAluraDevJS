function adicionarCapa() {
  let campoNome = document.querySelector("#capa");
  const nome = campoNome.value;
  buscaIMDB(nome.replaceAll(" ", "%20"));
  campoNome.value = "";
}

function buscaIMDB(nome) {
  $.getJSON(
    "https://api.allorigins.win/get?url=https%3A//betterimdbot.herokuapp.com/?tt=" +
      nome,
    function (data) {
      tratamentoIMDB(JSON.parse(data.contents)[1]); // o índice 0 fala sobre a API
    }
  );
}

function tratamentoIMDB(jsonIMDB) {
  const urlImagem = jsonIMDB.jsonnnob.image;
  const nomeObra = jsonIMDB.jsonnnob.name;
  const urlObra = jsonIMDB.tt_url;
  const ano = jsonIMDB.year;
  const notaIMDB = jsonIMDB.jsonnnob.aggregateRating.ratingValue;
  const genero = jsonIMDB.jsonnnob.genre.join(", ");

  if (urlImagem.endsWith(".jpg")) {
    listarCapasNaTela(urlImagem, nomeObra, urlObra, ano, notaIMDB, genero);
  } else {
    alert("URL de imagem inválida");
  }
}

function listarCapasNaTela(
  urlImagemCapa,
  nomeObra,
  urlObra,
  ano,
  notaIMDB,
  genero
) {
  const listaCapas = document.querySelector("#listaCapas");
  const elementoCapa =
    '<div id="capa"><a target=_blank alt="' +
    nomeObra +
    '" href="' +
    urlImagemCapa +
    '"><img width="182" height="268" src="' +
    urlImagemCapa +
    '"></a><p><b><a target=_blank alt="' +
    nomeObra +
    '" href="' +
    urlObra +
    '/">' +
    nomeObra +
    "</a></b></p><p>" +
    ano +
    "</p><p class='genero'>" +
    genero +
    "</p><p>Nota: " +
    notaIMDB +
    "</p></div>";
  listaCapas.innerHTML = listaCapas.innerHTML + elementoCapa;
}