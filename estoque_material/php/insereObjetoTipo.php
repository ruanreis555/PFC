<?php
  include('conexao.php'); // CONEXAO COM BANCO

  // PEGA VALORES DO FORM
  $object = $_POST['objectType'];
  $insert = false;

  $sql = "INSERT INTO `estoque_db`.`object_type` (`type_name`) VALUES ('$object');"; // QUERY A SER EXECUTADA
  $resultado = mysqli_query($conn, $sql); // EXECUTA A QUERY

  // SE A QUERY RETORNAR ALGUM VALOR INSERT TEM VALOR TRUE 
  if ($resultado) {
    $insert = true;
  } else {
    $insert = false;
  }

  echo json_encode($insert); // RETORNA PARA JS VALOR DO INSERT
?>