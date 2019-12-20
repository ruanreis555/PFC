<?php
  include('conexao.php'); // CONEXAO COM BANCO

  $sql = "SELECT type_id, type_name FROM estoque_db.object_type;"; // QUERY A SER EXECUTADA
  $resultado = mysqli_query($conn, $sql); // EXECUTA A QUERY

  if ($resultado) { // SE RETORNAR ALGUM RESULTADO
    while ($dados = mysqli_fetch_assoc($resultado)) { // ENQUANTO HOUVER DADOS PREENCHE AS VARIAVEIS
      $value = $dados['type_id'];
      $name = $dados['type_name'];

      // ADICIONA VALORES NO ARRAY
      $array_resultado[] = array( 'value' => $value, 'name' => $name);
    }
  } else {
    $array_resultado = false;
  }

  echo json_encode($array_resultado); // RETORNA PARA JS O ARRAY
?>