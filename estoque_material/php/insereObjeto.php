<?php
  include('conexao.php'); // CONEXAO COM BANCO

  // PEGA VALORES DO FORM
  $objectType = $_POST['objectType'];
  $objectName = $_POST['objectName'];
  $objectQtd = $_POST['objectQtd'];
  $insert = false;

  $sql = "INSERT INTO `estoque_db`.`object` (`object_name`,`object_qtd`,`type_id`) 
          VALUES ('$objectName', $objectQtd, $objectType);"; // QUERY A SER EXECUTADA
  $resultado = mysqli_query($conn, $sql); // EXECUTA A QUERY

  // SE A QUERY RETORNAR ALGUM VALOR INSERT TEM VALOR TRUE 
  if ($resultado) {
    $insert = true;
  } else {
    $insert = false;
  }

  echo json_encode($insert); // RETORNA PARA JS VALOR DO INSERT
?>