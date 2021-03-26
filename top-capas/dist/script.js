// function adicionarCapa() {
//   let campoURLImagem = document.querySelector("#capa");
//   const urlImagem = campoURLImagem.value;
//   if (urlImagem.endsWith(".jpg")) {
//     listarCapasNaTela(urlImagem);
//   } else {
//     alert("URL de imagem inválida");
//   }
//   campoURLImagem.value = "";
// }

function adicionarCapa() {
  let campoNome = document.querySelector("#capa");
  const nome = campoNome.value;
  buscaIMDB(nome.replaceAll(" ", "_"));
  campoNome.value = "";
}

function tratamentoIMDB(jsonIMDB) {
  // console.log("Imagem = " + jsonIMDB.d[0].i[0]);
  // console.log("Nome = " + jsonIMDB.d[0].l);
  // console.log("Duração = " + jsonIMDB.d[0].vt);
  // console.log("Ano = " + jsonIMDB.d[0].y);
  // console.log("ID = " + jsonIMDB.d[0].id);
  // console.log("Estrelando = " + jsonIMDB.d[0].s);
  const urlImagem = jsonIMDB.d[0].i[0];
  const nomeObra = jsonIMDB.d[0].l;
  const idObra = jsonIMDB.d[0].id;

  if (urlImagem.endsWith(".jpg")) {
    listarCapasNaTela(urlImagem, nomeObra, idObra);
  } else {
    alert("URL de imagem inválida");
  }
}

function listarCapasNaTela(urlImagemCapa, nomeObra, idObra) {
  const listaCapas = document.querySelector("#listaCapas");
  const elementoCapa =
    '<a target=_blank alt="' +
    nomeObra +
    '" href="https://www.imdb.com/title/' +
    idObra +
    '/"><img width="182" height="268" src="' +
    urlImagemCapa +
    '"></a>';
  listaCapas.innerHTML = listaCapas.innerHTML + elementoCapa;
}

function buscaIMDB(nome) {
  const comprimento = 6 + nome.length;

  $.getJSON(
    "https://api.allorigins.win/get?url=https%3A//sg.media-imdb.com/suggests/" +
      nome[0].toLowerCase() +
      "/" +
      nome +
      ".json&callback=?",
    function (data) {
      const retorno = data.contents.substr(
        comprimento,
        data.contents.length - comprimento - 1
      );
      tratamentoIMDB(JSON.parse(retorno));
    }
  );
}

// const listaSeries = [
//   [
//     "The Office",
//     "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     "https://www.imdb.com/title/tt0386676/?ref_=nv_sr_srsg_0"
//   ],
//   [
//     "Rick And Morty",
//     "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     "https://www.imdb.com/title/tt2861424/?ref_=nv_sr_srsg_0"
//   ],
//   [
//     "Breaking Bad",
//     "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR5,0,182,268_AL_.jpg",
//     "https://www.imdb.com/title/tt0903747/?ref_=nv_sr_srsg_0"
//   ]
// ];