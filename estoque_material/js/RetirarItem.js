$(document).ready(function() {
  // FUNCAO PARA LISTAR TIPO DE OBJETOS EXISTENTES
  $.ajax({
    url: "../php/selectObjeto.php",
    type: "get",
    dataType: "json",
    success: function(response) {
      //PREENCHE SELECT COM TIPOS EXISTENTES
      if (response) {
        $.each(response, function(id, objeto) {
          $("#objectName").append(
            $("<option>", {
              value: objeto.value,
              text: objeto.name
            })
          );
        });
      }
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  });
});

$("#formObject").submit(function() {
  // ENVIA FORM VIA AJAX PARA O PHP
  event.preventDefault();

  // CAPTURA OS VALORES DO FORM
  const objectName = $("#objectName").val();
  const objectQtd = $("#objectQtd").val();

  // VERIFICA OS VALORES
  if (objectName == -1) {
    alert("Selecione o objeto");
    return false;
  }

  if (objectQtd == "") {
    alert("Informe a quantidade a ser retirada");
    return false;
  }

  // ARMAZENA OS VALORES EM VARIAVEL
  var dados = $(this).serialize();

  $.ajax({
    url: "../php/updateRetirarItem.php",
    type: "post",
    dataType: "json",
    data: dados,
    success: function(response) {
      if (response) {
        // SE O RETORNO É TRUE ITEM É RETIRADO

        //EXIBE MENSAGEM DE SUCESSO
        $("#msg").text("Item retirado!");
        $("#msg").css("color", "#1d7037");
        $("#msg").show();

        // RESETA VALORES
        $("#objectName").val(-1);
        $("#objectQtd").val("");
      } else {
        // SE O RETORNO É FALSE EXIBE ERRO
        $("#msg").text(
          "Retirada inválida! Número de estoque é inferior ao solicitado."
        );
        $("#msg").css("color", "#FA0514");
        $("#msg").show();
      }
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  });
});
