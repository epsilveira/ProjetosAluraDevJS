var cartaPaulo = {
  nome: "Seiya de Pegaso",
  imagem:
    "https://pm1.narvii.com/6809/ab20c7c73e900b9dfc40bed8f6e32bf9561f0bbcv2_hq.jpg",
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90
  }
};
function construtorCarta(nome, livro, cap, vers, ano, imagem) {
  return {
    nome: nome,
    imagem: imagem,
    atributos: {
      livro: livro,
      capítulos: cap,
      versículos: vers,
      ano: ano
    }
  };
}

const cartas = [
  construtorCarta(
    "Gênesis",
    1,
    50,
    1533,
    -1513,
    "http://mensagemrevelada.org.br/wp-content/uploads/2020/04/PRINCIPIO-CRIACAO-810x456.jpg"
  ),
  construtorCarta(
    "Êxodo",
    2,
    40,
    1213,
    -1512,
    "https://aventurasnahistoria.uol.com.br/media/_versions/exodus_1651662_capa_widelg.jpeg"
  ),
  construtorCarta(
    "Levítico",
    3,
    27,
    859,
    -1512,
    "https://i0.wp.com/voltemosaoevangelho.com/blog/wp-content/uploads/2020/02/4-razo%CC%83es-pelas-quais-voce%CC%82-deve-pregar-E%CC%82xodo-1.jpg?fit=856%2C394&ssl=1"
  ),
  construtorCarta(
    "Números",
    4,
    36,
    1288,
    -1473,
    "https://ebd-biblia.webnode.com/_files/system_preview_detail_200002283-1a7ea1b785/numeros-biblia.jpg"
  ),
  construtorCarta(
    "Deuteronômio",
    5,
    34,
    959,
    -1473,
    "https://cdn.mensagenscomamor.com/content/images/p000000516.jpg?v=0&w=696&h=392&c=1"
  ),
  construtorCarta(
    "Josué",
    6,
    24,
    658,
    -1450,
    "https://i.pinimg.com/originals/71/08/77/71087719e37e62e7ff2a0665ab465201.jpg"
  ),
  construtorCarta(
    "Juízes",
    7,
    21,
    619,
    -1050,
    "https://1.bp.blogspot.com/-zvnS1sZ4tkg/Xb4DxzwGYkI/AAAAAAAAVlQ/mBTGv_g859sxaxmxCVLYNC_dfhkAeJCWACLcBGAsYHQ/s1600/4%2BJu%25C3%25ADzes-min.jpg"
  ),
  construtorCarta(
    "Rute",
    8,
    4,
    85,
    -1010,
    "https://3.bp.blogspot.com/-n9nw9XLqAZA/Vsnrnd-QdYI/AAAAAAAABfM/a5N47gnC7Qg/s1600/Rute.jpg"
  ),
  construtorCarta(
    "1 Samuel",
    9,
    31,
    811,
    -722,
    "https://upload.wikimedia.org/wikipedia/commons/f/f1/Eli_and_Samuel.jpg"
  ),
  construtorCarta(
    "2 Samuel",
    10,
    24,
    695,
    -1010,
    "https://codigodabiblia.com/wp-content/uploads/2020/06/profeta-c%C3%B3digo-da-b%C3%ADblia.jpg"
  ),
  construtorCarta(
    "1 Reis",
    11,
    22,
    817,
    -560,
    "http://3.bp.blogspot.com/-bCWvBkQrhik/T-y4ucJ5MLI/AAAAAAAAAfo/l3vzmfetKtM/s1600/fotos-salomao-flickr.jpg"
  ),
  construtorCarta(
    "2 Reis",
    12,
    25,
    719,
    -562,
    "https://lh3.googleusercontent.com/proxy/zT7GEVF-ZMidfxS8I6eD_rwAW07JAyqREoUgTP8-phA9Wny2s24YNBH3px9rn5b7puvOM16XEND5um_0NxDKNNigMU0f7GFAgoAhA3d6eplmfFe-ReYqBFPdTz6s-bsShXJ0_f5OkszuT-4bURMBdJzCEJ0I1w"
  ),
  construtorCarta(
    "1 Crônicas",
    13,
    29,
    942,
    -500,
    "https://projetogospel.com/wp-content/uploads/2018/09/o-significado-de-sacerdote-e1576146915467.jpg"
  ),
  construtorCarta(
    "2 Crônicas",
    14,
    36,
    822,
    -500,
    "https://lh3.googleusercontent.com/proxy/GCJ2fUcjVirs0IOoB0bG3pbGXsMVvR1L7d1j3vKEBp0Vf-GDpqe-K1vMdjrC6jm_Dx__fPmagUYcCYoXVlwqUliPGxVshMa8Ye2AUtS-uLo_tu4tWA"
  ),
  construtorCarta(
    "Esdras",
    15,
    10,
    280,
    -458,
    "https://blogdoseualipio.com.br/wp-content/uploads/2016/12/Esdras-3.jpg"
  ),
  construtorCarta(
    "Neemias",
    16,
    13,
    406,
    -420,
    "https://www.portalrevelacao.com/wp-content/uploads/2018/04/neemias-e-os-muros-de-jerusalem-1200x900.jpg"
  ),
  construtorCarta(
    "Ester",
    17,
    10,
    167,
    -500,
    "https://criancasparajesus.files.wordpress.com/2011/09/6.jpg"
  ),
  construtorCarta(
    "Jó",
    18,
    42,
    1070,
    -1600,
    "https://miro.medium.com/max/1200/1*pfruJ0oICy006CLKsRgpOw.jpeg"
  ),
  construtorCarta(
    "Salmos",
    19,
    150,
    2461,
    -900,
    "http://4.bp.blogspot.com/-urLmgRUnkKo/Ue2j0HkBAWI/AAAAAAAABXs/pleXPkgBKEU/s1600/images+(1).jpg"
  ),
  construtorCarta(
    "Provérbios",
    20,
    31,
    915,
    -700,
    "http://4.bp.blogspot.com/-urLmgRUnkKo/Ue2j0HkBAWI/AAAAAAAABXs/pleXPkgBKEU/s1600/images+(1).jpg"
  ),
  construtorCarta(
    "Eclesiastes",
    21,
    12,
    222,
    -1000,
    "https://cleofas.com.br/wp-content/uploads/2011/11/rei_salomao.jpg"
  ),
  construtorCarta(
    "Cantares",
    22,
    8,
    117,
    -931,
    "http://pm1.narvii.com/6893/3a5c5844f9b642dde0570e4642ba9195fc70a0b1r1-822-584v2_uhq.jpg"
  ),
  construtorCarta(
    "Isaías",
    23,
    66,
    1292,
    -740,
    "http://www.abiblia.org/public/icons/2017_09_03_10_07_53.jpg"
  ),
  construtorCarta(
    "Jeremias",
    24,
    52,
    1364,
    -605,
    "https://assetsnffrgf-a.akamaihd.net/assets/m/1102016067/univ/art/1102016067_univ_lsr_xl.jpg"
  ),
  construtorCarta(
    "Lamentações",
    25,
    5,
    154,
    -586,
    "https://cdn.mensagenscomamor.com/content/images/p000001292.jpg?v=0&w=696&h=392&c=1"
  ),
  construtorCarta(
    "Ezequiel",
    26,
    48,
    1273,
    -571,
    "http://2.bp.blogspot.com/_7eAHMJJo-zk/TU4TnpwnYmI/AAAAAAAAAFM/SYbnH4TeW1E/s1600/cemiterioossossecos.jpg"
  ),
  construtorCarta(
    "Daniel",
    27,
    12,
    357,
    -530,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/VernetDaniel.jpg/220px-VernetDaniel.jpg"
  ),
  construtorCarta(
    "Oséias",
    28,
    14,
    197,
    -760,
    "http://4.bp.blogspot.com/-3L8whM9NCXg/Uat475jGJjI/AAAAAAAAXX8/PqHK68498j4/s320/A+OSEIAS.jpg"
  ),
  construtorCarta(
    "Joel",
    29,
    3,
    73,
    -800,
    "https://estudobiblico.org/wp-content/uploads/2012/05/joel-inasao-gafanhotos-caldeus.jpg"
  ),
  construtorCarta(
    "Amós",
    30,
    9,
    146,
    -760,
    "http://3.bp.blogspot.com/-dvbBNQOkHqs/VgNTSt3mCVI/AAAAAAAADJ8/09jy8l0UE6E/s1600/amos-el-profeta.jpg"
  ),
  construtorCarta(
    "Obadias",
    31,
    1,
    21,
    -586,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Obadiah.jpg/270px-Obadiah.jpg"
  ),
  construtorCarta(
    "Jonas",
    32,
    4,
    48,
    -844,
    "http://3.bp.blogspot.com/-W5-9DYdDe6o/U_LT-usXcaI/AAAAAAAAAYs/aHvwsvyU1UE/s1600/Jonas.jpg"
  ),
  construtorCarta(
    "Miquéias",
    33,
    7,
    105,
    -716,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/139.Micah_Exhorts_the_Israelites_to_Repent.jpg/260px-139.Micah_Exhorts_the_Israelites_to_Repent.jpg"
  ),
  construtorCarta(
    "Naum",
    34,
    3,
    47,
    -612,
    "https://conectatudo.files.wordpress.com/2015/08/ninive.png?w=640"
  ),
  construtorCarta(
    "Habacuque",
    35,
    3,
    56,
    -625,
    "https://2.bp.blogspot.com/-Me2eLomTnT4/U-YV1CEAOqI/AAAAAAAABjw/Ywj3Zh8iwsU/s1600/HABACUQUE+2.jpg"
  ),
  construtorCarta(
    "Sofonias",
    36,
    3,
    53,
    -622,
    "https://www.fiquefirme.com.br/uploads/2014/02/foto-14.jpg"
  ),
  construtorCarta(
    "Ageu",
    37,
    2,
    38,
    -520,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTane-KfA_l5PrCbjhnqy1kdfNKrUWV8br-gQ&usqp=CAU"
  ),
  construtorCarta(
    "Zacarias",
    38,
    14,
    211,
    -518,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Michelangelo_Buonarroti_031.jpg/1200px-Michelangelo_Buonarroti_031.jpg"
  ),
  construtorCarta(
    "Malaquias",
    39,
    4,
    55,
    -500,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Duccio_di_Buoninsegna_066.jpg/185px-Duccio_di_Buoninsegna_066.jpg"
  ),
  construtorCarta(
    "Mateus",
    1,
    28,
    1071,
    70,
    "https://www.chamada.com.br/assets/images/stories/nasce_um_rei2.jpg"
  ),
  construtorCarta(
    "Marcos",
    2,
    16,
    678,
    65,
    "http://2.bp.blogspot.com/-zv9n1euWoj4/T4Eo4oh4ptI/AAAAAAAABMo/v428LdE9KYw/s1600/Lava%252BP%2525C3%2525A9s%252B-%252BJesus.jpg"
  ),
  construtorCarta(
    "Lucas",
    3,
    24,
    1151,
    59,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kramskoi_Christ_dans_le_d%C3%A9sert.jpg/250px-Kramskoi_Christ_dans_le_d%C3%A9sert.jpg"
  ),
  construtorCarta(
    "João",
    4,
    21,
    879,
    80,
    "https://gurudacidade.com.br/wp-content/uploads/2019/05/cruz-860x550.jpg"
  ),
  construtorCarta(
    "Atos",
    5,
    28,
    1007,
    61,
    "https://1.bp.blogspot.com/-t9tmT6zzrxY/WniQ3crEFcI/AAAAAAAAE64/sna2zKvduhIxnzaRd_rCoJraxp2VRuMlACLcBGAs/w1200-h630-p-k-no-nu/day-pentecost-baptizing-crowd-river-158527-wallpaper.jpg"
  ),
  construtorCarta(
    "Romanos",
    6,
    16,
    433,
    55,
    "https://estudobiblico.org/wp-content/uploads/2012/05/ouvem-lei-nao-sao-justos.jpg"
  ),
  construtorCarta(
    "1 Coríntios",
    7,
    16,
    437,
    56,
    "https://cdnarautos.s3.amazonaws.com/2020/08/R225-DIV-Sao-Paulo-pregando-no-areopago.jpg"
  ),
  construtorCarta(
    "2 Coríntios",
    8,
    13,
    256,
    56,
    "https://estiloadoracao.com/wp-content/uploads/2016/07/Quem-foi-Apolo.jpg"
  ),
  construtorCarta(
    "Gálatas",
    9,
    6,
    149,
    55,
    "https://leandroquadros.com.br/wp-content/uploads/2018/05/galatas.jpg"
  ),
  construtorCarta(
    "Efésios",
    10,
    6,
    155,
    60,
    "https://www.estudosbiblicos.gratis/images/PauloCarta.jpg"
  ),
  construtorCarta(
    "Filipenses",
    11,
    4,
    104,
    60,
    "https://estiloadoracao.com/wp-content/uploads/2016/06/Ep%C3%ADstola-de-Paulo-a-Filemom.jpg"
  ),
  construtorCarta(
    "Colossenses",
    12,
    4,
    95,
    60,
    "https://agsalmeida.files.wordpress.com/2013/08/paulo-e-timoteo.jpg"
  ),
  construtorCarta(
    "1 Tessalonicenses",
    13,
    5,
    89,
    50,
    "https://www.gospelprime.com.br/wp-content/uploads/2019/06/apostolo-paulo-escrevendo-cartas-1200x720.jpg"
  ),
  construtorCarta(
    "2 Tessalonicenses",
    14,
    3,
    47,
    51,
    "https://www.pom.org.br/wp-content/uploads/2017/01/apostolo-paulo.jpg"
  ),
  construtorCarta(
    "1 Timóteo",
    15,
    6,
    113,
    62,
    "https://assetsnffrgf-a.akamaihd.net/assets/m/1102016110/univ/art/1102016110_univ_lsr_xl.jpg"
  ),
  construtorCarta(
    "2 Timóteo",
    16,
    4,
    83,
    66,
    "https://assetsnffrgf-a.akamaihd.net/assets/m/2015809/univ/art/2015809_univ_lsr_xl.jpg"
  ),
  construtorCarta(
    "Tito",
    17,
    3,
    46,
    62,
    "https://lh3.googleusercontent.com/proxy/a1cMeVpVVyXNYp_CAGeTOp94-Ki027VuAR-2PExnmjPI6LDSjlLxm_Uq-74JG9v6Sw64S0NhkErg8S2wL22HTn6JJA8M8m3wSODchgcJzQVwY7I7wpmgbu_c-bg8myK-b6g=w1200-h630-p-k-no-nu"
  ),
  construtorCarta(
    "Filemon",
    18,
    1,
    25,
    60,
    "https://estiloadoracao.com/wp-content/uploads/2016/06/Quem-foi-Filemom.jpg"
  ),
  construtorCarta(
    "Hebreus",
    19,
    13,
    303,
    64,
    "http://4.bp.blogspot.com/-K5KubOzUo5I/VmQ_hDKmc-I/AAAAAAAAIfg/vvFWtQEoPhw/s1600/Sumo%2BSacerdote.jpg"
  ),
  construtorCarta(
    "Tiago",
    20,
    5,
    108,
    48,
    "https://agrandecidade.files.wordpress.com/2015/08/tiago-ii.png"
  ),
  construtorCarta(
    "1 Pedro",
    21,
    5,
    105,
    63,
    "https://projetogospel.com/wp-content/uploads/2017/12/historia-de-pedro-e1576082038846.png"
  ),
  construtorCarta(
    "2 Pedro",
    22,
    3,
    61,
    65,
    "https://projetogospel.com/wp-content/uploads/2017/12/historia-de-pedro-e1576082038846.png"
  ),
  construtorCarta(
    "1 João",
    23,
    5,
    105,
    80,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Alonso_Cano_001.jpg/250px-Alonso_Cano_001.jpg"
  ),
  construtorCarta(
    "2 João",
    24,
    1,
    13,
    90,
    "https://www.a12.com/source/files/originals/joao_evangelista.jpg"
  ),
  construtorCarta(
    "3 João",
    25,
    1,
    15,
    90,
    "https://www.snpcultura.org/imagens/sao_joao_20171227_pc.JPG"
  ),
  construtorCarta(
    "Judas",
    26,
    1,
    25,
    65,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Stjudethaddeus.JPG/250px-Stjudethaddeus.JPG"
  ),
  construtorCarta(
    "Apocalipse",
    27,
    22,
    404,
    90,
    "http://3.bp.blogspot.com/-7fgl32FpCWs/Tw-Djlhr-OI/AAAAAAAAApE/9ibO7DZFf_U/s1600/nova%2Bjerusalem.jpg"
  )
];
const pontuacaoMax = cartas.length;
//const pontuacaoMax = 4;
let cartaPC, cartaJogador;
let pontuacao = parseInt(pontuacaoMax / 2);
const imagemPadrao =
  "https://grupoahora.net.br/wp-content/uploads/2020/08/gincana-do-vale.jpg";

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
  // document.getElementById("resultado").innerHTML = "";
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
  exibirCartaJogador();

  divCartaPC = document.getElementById("carta-maquina");
  divCartaPC.style.backgroundImage = `url(${imagemPadrao})`;
  divCartaPC.innerHTML =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
}

function exibirCartaJogador(atributoSelecionado = "", status = "") {
  let divCartaJogador = document.getElementById("carta-jogador");
  let moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  let opcoesTexto = "";

  if (atributoSelecionado === "") {
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo.charAt(0).toUpperCase() +
        atributo.slice(1) +
        ": " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
  } else {
    for (var atributo in cartaJogador.atributos) {
      if (atributo === atributoSelecionado) {
        opcoesTexto +=
          "<p class='" +
          status +
          "' type='text' name='atributo' value='" +
          atributo +
          "'>" +
          atributo.charAt(0).toUpperCase() +
          atributo.slice(1) +
          ": " +
          cartaJogador.atributos[atributo] +
          "<br>";
      } else {
        opcoesTexto +=
          "<p type='text' name='atributo' value='" +
          atributo +
          "'>" +
          atributo.charAt(0).toUpperCase() +
          atributo.slice(1) +
          ": " +
          cartaJogador.atributos[atributo] +
          "<br>";
      }
    }
  }
  let html = '<div id="opcoes" class="carta-status">';

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}

function exibirCartaPC(atributoSelecionado = "", status = "") {
  let divCartaPC = document.getElementById("carta-maquina");
  let moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';
  divCartaPC.style.backgroundImage = `url(${cartaPC.imagem})`;
  let nome = `<p class="carta-subtitle">${cartaPC.nome}</p>`;
  let opcoesTexto = "";

  for (var atributo in cartaPC.atributos) {
    if (atributo === atributoSelecionado) {
      opcoesTexto +=
        "<p class='" +
        status +
        "'type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo.charAt(0).toUpperCase() +
        atributo.slice(1) +
        ": " +
        cartaPC.atributos[atributo] +
        "<br>";
    } else {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo.charAt(0).toUpperCase() +
        atributo.slice(1) +
        ": " +
        cartaPC.atributos[atributo] +
        "<br>";
    }
  }

  let html = '<div id="opcoes" class="carta-status">';

  divCartaPC.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}

function obterAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  // let divResultado = document.getElementById("resultado");
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
      // htmlResultado = '<p class="resultado-final">Venceu</p>';
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaPC.atributos[atributoSelecionado]
    ) {
      vencedor = "pc";
      // htmlResultado = '<p class="resultado-final">Perdeu</p>';
    } else {
      vencedor = "empate";
      // htmlResultado = '<p class="resultado-final">Empatou</p>';
    }
  } else {
    if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaPC.atributos[atributoSelecionado]
    ) {
      vencedor = "jogador";
      // htmlResultado = '<p class="resultado-final">Venceu</p>';
    } else if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaPC.atributos[atributoSelecionado]
    ) {
      vencedor = "pc";
      // htmlResultado = '<p class="resultado-final">Perdeu</p>';
    } else {
      vencedor = "empate";
      // htmlResultado = '<p class="resultado-final">Empatou</p>';
    }
  }

  calculaPontuacao(vencedor);
  exibirPontuacao();
  exibirCartas(atributoSelecionado, vencedor);
  // divResultado.innerHTML = htmlResultado;
  telaReset();
}

function exibirCartas(atributoSelecionado, vencedor) {
  if (vencedor === "jogador") {
    exibirCartaJogador(atributoSelecionado, "vencedor");
    exibirCartaPC(atributoSelecionado, "perdedor");
  } else if (vencedor === "pc") {
    exibirCartaJogador(atributoSelecionado, "perdedor");
    exibirCartaPC(atributoSelecionado, "vencedor");
  } else {
    exibirCartaJogador(atributoSelecionado, "empate");
    exibirCartaPC(atributoSelecionado, "empate");
  }
}

function telaReset() {
  //document.getElementById("opcoes").innerHTML = "";
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