document
  .getElementById("whatsappButton")
  .addEventListener("click", function () {
    var phoneNumber = "5531988047534"; // Coloque o número de telefone desejado aqui
    var message = "Olá, gostaria de mais informações."; // Coloque a mensagem padrão aqui
    var whatsappURL =
      "https://api.whatsapp.com/send?phone=" +
      phoneNumber +
      "&text=" +
      encodeURIComponent(message);
    window.open(whatsappURL, "_blank");
  });
