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
  // ENVIA FORM VIA SUBMIT
  event.preventDefault();

  // VALORES DO FORM
  const objectName = $("#objectName").val();
  const objectQtd = $("#objectQtd").val();

  // VERIFICACAO SE DOS VALORES SAO VALIDOS
  if (objectName == -1) {
    alert("Selecione o objeto");
    return false;
  }

  if (objectQtd == "") {
    alert("Informe a quantidade a ser retirada");
    return false;
  }

  // ARMAZENA VALORES EM VARIAVEL
  var dados = $(this).serialize();

  $.ajax({
    // ENVIA FORM PARA O PHP
    url: "../php/updateEntradaItem.php",
    type: "post",
    dataType: "json",
    data: dados,
    success: function(response) {
      if (response) {
        //EXIBE MENSAGEM DE SUCESSO
        $("#msg").text("Item adicionado!");
        $("#msg").show();

        //RESETA VALORES
        $("#objectName").val(-1);
        $("#objectQtd").val("");
      }
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  });
});
