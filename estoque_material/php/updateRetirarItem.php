<?php
  include('conexao.php'); // CONEXAO COM O BANCO

  // CAPTURA VALORES DO FORM
  $objectName = $_POST['objectName'];
  $objectQtd = $_POST['objectQtd'];
  $update = true;

  // QUERY A SER EXECUTADA
  $sql = "SELECT object_id, object_name, object_qtd FROM estoque_db.object WHERE object_id = $objectName;";
  $resultado_select = mysqli_query($conn, $sql); // EXECUTA A QUERY

  if ($resultado_select) { // SE RETORNAR ALGUM RESULTADO
    while ($dados = mysqli_fetch_assoc($resultado_select)) { // ENQUANTO HOUVER DADOS PREENCHE AS VARIAVEIS
      $qtd = $dados['object_qtd'];
    }

    // SE A QUANTIDADE RETIRADA FOR MAIOR QUE A QUANTIDADE EM ESTOQUE UPDATE É FALSE
    if ($objectQtd > $qtd) {
      $update = false;  
    }
  }

  if ($update) { // CASO UPDATE FOR TRUE (QUANTIDADE RETIRADA MENOR OU IGUAL A QUANTIDADE EM ESTOQUE)
    $qtd -= $objectQtd; // DIMINUI O VALOR EM ESTOQUE PELA QUANTIDADE SOLICITADA

    // EXECUTA O UPDATE
    $sql = "UPDATE `estoque_db`.`object` SET `object_qtd` = $qtd WHERE `object_id` = $objectName;";
    $resultado = mysqli_query($conn, $sql);
    
    // INSERE VALOR NA TABELA DE REGISTROS
    $sql = "INSERT INTO `estoque_db`.`registry_exit` (`exit_qtd`,`object_id`) VALUES ($objectQtd, $objectName);";
    $resultado_insert = mysqli_query($conn, $sql);
  }
  
  echo json_encode($update); // RETORNA UPDATE PARA JS
?>