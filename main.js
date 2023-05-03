let ativado = false;
const botao = document.getElementById('checkbox');

botao.addEventListener('click', function() {
  if (!ativado) {
    document.getElementById("card_1_text2").innerHTML = "&dollar;199.99";
    document.getElementById("card_2_text2").innerHTML = "&dollar;299.99";
    document.getElementById("card_3_text2").innerHTML = "&dollar;399.99";
    ativado = true;
  } else {
    document.getElementById("card_1_text2").innerHTML = "&dollar;19.99";
    document.getElementById("card_2_text2").innerHTML = "&dollar;29.99";
    document.getElementById("card_3_text2").innerHTML = "&dollar;39.99";
    ativado = false;
  }
});