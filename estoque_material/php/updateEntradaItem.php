<?php
  include('conexao.php'); // CONEXAO COM O BANCO

  // CAPTURA VALORES DO FORM
  $objectName = $_POST['objectName'];
  $objectQtd = $_POST['objectQtd'];
  $update = false;

  // QUERY A SER EXECUTADA
  $sql = "SELECT object_id, object_name, object_qtd FROM estoque_db.object WHERE object_id = $objectName;";
  $resultado_select = mysqli_query($conn, $sql); // EXECUTA A QUERY

  if ($resultado_select) { // SE RETORNAR ALGUM RESULTADO
    while ($dados = mysqli_fetch_assoc($resultado_select)) { // ENQUANTO HOUVER DADOS PREENCHE AS VARIAVEIS
      $qtd = $dados['object_qtd'];
    }
  }

  $qtd += $objectQtd; // SOMA QUANTIDADE EXISTENTE COM O VALOR ADICIONADO

  // FAZ UPADTE NA TABELA
  $sql = "UPDATE `estoque_db`.`object` SET `object_qtd` = $qtd WHERE `object_id` = $objectName;";
  $resultado = mysqli_query($conn, $sql);

  // INSERE VALOR NA TABELA DE REGISTROS
  $sql = "INSERT INTO `estoque_db`.`registry_entry` (`entry_qtd`, `object_id`) VALUES ($objectQtd, $objectName);";
  $resultado_insert = mysqli_query($conn, $sql);
  
  // SE A QUERY RETORNAR ALGUM VALOR UPDATE TEM VALOR TRUE 
  if ($resultado) {
    $update = true;
  } else {
    $update = false;
  }
  
  echo json_encode($update); // RETORNA UPDATE PARA JS
?>