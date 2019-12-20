$(document).ready(function() {
  $.ajax({
    // PEGA OS DADOS VIA AJAX E MONTA TABELA
    url: "../php/registroEntrada.php",
    method: "get",
    dataType: "json",
    beforeSend: function() {
      $("#loadingEntrada").show(); // EXIBE LOADING
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  }).done(function(data) {
    // QUANDO REQUISICAO É FEITA MONTA TABELA
    $("#loadingEntrada").hide(); // ESCONDE LOADING
    $("#tableEntrada").show(); // EXIBE TABELA
    $("#tableEntrada").dataTable({
      // MONTA TABELA VIA AJAX
      aaData: data,
      responsive: true,
      columns: [
        // EXIBE DADOS NA TABELA
        { data: "type" },
        { data: "object" },
        { data: "qtd" },
        { data: "date" }
      ],
      language: {
        // LINGUAGEM PT-BR
        url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
      },
      info: false, // NAO EXIBE INFO
      order: [[3, "desc"]] // FILTRO PELA DATA DSCRESCENTE
    });
  });

  $.ajax({
    // PEGA OS DADOS VIA AJAX E MONTA TABELA
    url: "../php/registroSaida.php",
    method: "get",
    dataType: "json",
    beforeSend: function() {
      $("#loadingSaida").show(); // EXIBE LOADING
    },
    error: function(request, status, error) {
      console.log(request.responseText);
      console.log(`status: ${status} - error: ${error}`);
    }
  }).done(function(data) {
    // QUANDO REQUISICAO É FEITA MONTA TABELA
    $("#loadingSaida").hide(); // ESCONDE LOADING
    $("#tableSaida").show(); // EXIBE TABELA
    $("#tableSaida").dataTable({
      // MONTA TABELA VIA AJAX
      aaData: data,
      responsive: true,
      columns: [
        // EXIBE DADOS NA TABELA
        { data: "type" },
        { data: "object" },
        { data: "qtd" },
        { data: "date" }
      ],
      language: {
        // LINGUAGEM PT-BR
        url: "//cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
      },
      info: false, // NAO EXIBE INFO
      order: [[3, "desc"]] // FILTRO PELA DATA DSCRESCENTE
    });
  });
});
