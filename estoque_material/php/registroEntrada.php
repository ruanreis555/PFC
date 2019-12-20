<?php
  include('conexao.php'); // CONEXAO COM BANCO

  // QUERY A SER EXECUTADA
  $sql = "SELECT c.type_name, b.object_name, a.entry_qtd, DATE_FORMAT(a.created_at, '%d/%m/%Y') date FROM estoque_db.registry_entry a
          INNER JOIN estoque_db.object b ON b.object_id = a.object_id
          INNER JOIN estoque_db.object_type c ON c.type_id = b.type_id;";
  $resultado = mysqli_query($conn, $sql); // EXECUTA A QUERY

  if ($resultado) { // SE RETORNAR ALGUM RESULTADO
    while ($dados = mysqli_fetch_assoc($resultado)) { // ENQUANTO HOUVER DADOS PREENCHE AS VARIAVEIS
      $type = $dados['type_name'];
      $object = $dados['object_name'];
      $qtd = $dados['entry_qtd'];
      $date = $dados['date'];

      // ADICIONA VALORES NO ARRAY
      $array_resultado[] = array( 'type' => $type, 'object' => $object, 'qtd' => $qtd, 'date' => $date);
    }
  } else {
    $array_resultado = false;
  }

  echo json_encode($array_resultado); // RETORNA PARA JS O ARRAY
?>