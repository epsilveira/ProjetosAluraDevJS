function opcoesCompartilhar(id) {
  const display = document.getElementById(id).style.display;
  if (display === "inline") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "inline";
  }
}