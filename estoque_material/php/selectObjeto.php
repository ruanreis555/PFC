<?php
  include('conexao.php'); // CONEXAO COM BANCO

  $sql = "SELECT object_id, object_name, object_qtd FROM estoque_db.object;"; // QUERY A SER EXECUTADA
  $resultado = mysqli_query($conn, $sql); // EXECUTA A QUERY

  if ($resultado) { // SE RETORNAR ALGUM RESULTADO
    while ($dados = mysqli_fetch_assoc($resultado)) { // ENQUANTO HOUVER DADOS PREENCHE AS VARIAVEIS
      $value = $dados['object_id'];
      $name = $dados['object_name'];
      $qtd = $dados['object_qtd'];

      // ADICIONA VALORES NO ARRAY
      $array_resultado[] = array( 'value' => $value, 'name' => $name, 'qtd' => $qtd);
    }
  } else {
    $array_resultado = false;
  }

  echo json_encode($array_resultado); // RETORNA PARA JS O ARRAY
?>