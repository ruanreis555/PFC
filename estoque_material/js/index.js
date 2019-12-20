$("#formObject").submit(function() {
  // ENVIA FORM VIA SUBMIT
  event.preventDefault();

  // CAPTURA VALOR
  const object = $("#objectType").val();

  // VERIFICA O VALOR
  if (!object) {
    alert("Informe um objeto");
    return false;
  }

  // ARMAZENA VALOR DO FORM
  var dados = $(this).serialize();

  $.ajax({
    // ENVIA FORM VIA AJAX PARA O PHP
    url: "./php/insereObjetoTipo.php",
    type: "post",
    dataType: "json",
    data: dados,
    success: function(response) {
      if (response) {
        $("#msg").show(); // EXIBE MENSAGEM

        $("#objectType").val(""); // RESETA VALORES
      }
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  });
});
