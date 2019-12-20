$(document).ready(function() {
  // FUNCAO PARA LISTAR TIPO DE OBJETOS EXISTENTES
  $.ajax({
    url: "../php/selectObjetoTipo.php",
    type: "get",
    dataType: "json",
    success: function(response) {
      //PREENCHE SELECT COM TIPOS EXISTENTES
      if (response) {
        $.each(response, function(id, objeto) {
          $("#objectType").append(
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
  const objectType = $("#objectType").val();
  const objectName = $("#objectName").val();
  const objectQtd = $("#objectQtd").val();

  // VERIFICACAO SE DOS VALORES SAO VALIDOS
  if (objectType == -1) {
    alert("Selecione o tipo do objeto");
    return false;
  }

  if (objectName == "") {
    alert("Informe o nome do objeto");
    return false;
  }

  if (objectQtd == "") {
    alert("Informe a quantidade do objeto");
    return false;
  }

  // ARMAZENA VALORES EM VARIAVEL
  var dados = $(this).serialize();

  $.ajax({
    // ENVIA FORM PARA O PHP
    url: "../php/insereObjeto.php",
    type: "post",
    dataType: "json",
    data: dados,
    success: function(response) {
      if (response) {
        $("#msg").show(); // EXIBE MENSAGEM DE SUCESSO

        //RESETA VALORES
        $("#objectType").val(-1);
        $("#objectName").val("");
        $("#objectQtd").val("");
      }
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  });
});
