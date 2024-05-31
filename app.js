//Contato para o cliente
document
  .getElementById("whatsappButton")
  .addEventListener("click", function () {
    var phoneNumber = "+55 31 9840-4116"; // Coloque o número de telefone desejado aqui
    var message = "Olá, gostaria de mais informações."; // Coloque a mensagem padrão aqui
    var whatsappURL =
      "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message);
    window.open(whatsappURL, "_blank");
  });

//Contato para meu site
document.getElementById("app_soft").addEventListener("click", function () {
  var contato = "+55 31 8804-7534"; // Coloque o número de telefone desejado aqui
  var mensage = "Olá, gostaria de mais informações."; // Coloque a mensagem padrão aqui
  var whatsapp =
    "https://api.whatsapp.com/send?phone=" +
    contato +
    "&text=" +
    encodeURIComponent(mensage);
  window.open(whatsapp, "_blank");
});
//Menu Hambuger
function clickMenu() {
  if (listaMenu.style.display == "block") {
    listaMenu.style.display = "none";
  } else {
    listaMenu.style.display = "block";
  }
}
