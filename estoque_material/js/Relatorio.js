$(document).ready(function() {
  $.ajax({ // PEGA OS DADOS VIA PHP
    url: "../php/relatorioTable.php",
    method: "get",
    dataType: "json",
    beforeSend: function() {
      $("#loading").show(); // EXIBE LOADING
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  }).done(function(data) { // QUANDO REQUISICAO É FEITA MONTA TABELA
    $("#loading").hide(); // ESCODE LOADING
    $("#tableEstoque").show(); //EXIBE TABELA
    $("#tableEstoque").dataTable({ // MONTA TABELA COM DATATABLE
      aaData: data,
      responsive: true,
      // PEGA OS DADOS E EXIBE 
      columns: [{ data: "type" }, { data: "object" }, { data: "qtd" }], 
      language: { // LINGUAGEM PT-BR
        url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
      },
      info: false // NAO EXIBE INFO DA TABELA 
    });
  });
});
