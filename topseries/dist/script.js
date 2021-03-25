const listaSeries = [
  [
    "The Office",
    "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://www.imdb.com/title/tt0386676/?ref_=nv_sr_srsg_0"
  ],
  [
    "Rick And Morty",
    "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "https://www.imdb.com/title/tt2861424/?ref_=nv_sr_srsg_0"
  ],
  [
    "Breaking Bad",
    "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR5,0,182,268_AL_.jpg",
    "https://www.imdb.com/title/tt0903747/?ref_=nv_sr_srsg_0"
  ]
];

for (let i = 0; i < listaSeries.length; i++) {
  document.write(
    '<a target=_blank href="' +
      listaSeries[i][2] +
      '"><img alt="' +
      listaSeries[i][0] +
      '" src="' +
      listaSeries[i][1] +
      '"></a>'
  );
}

// const listaSeries = ["Breaking_Bad", "The_Office_(Estados_Unidos)"];
// let apiURL =
//   "https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=info|pageprops|pageimages|revisions&inprop=url&rvprop=content&titles=";
// for (var i = 0; i < listaSeries.length; i++) {
//   if (i === listaSeries.length - 1) {
//     apiURL += listaSeries[i];
//   } else {
//     apiURL += listaSeries[i] + "|";
//   }
// }

// var request = new XMLHttpRequest();
// request.open("GET", apiURL);
// request.responseType = "json";
// request.send();

// request.onload = function () {
//   console.log(request.response);
//   console.log(request.status);
// };
// const request = new XMLHttpRequest();
// request.open("GET", apiURL, false);
// request.send();
// const responseText = request.responseText;
// const response = JSON.parse(responseText);
// console.log(response);