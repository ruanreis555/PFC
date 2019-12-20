<?php
  include('conexao.php'); // CONEXAO COM BANCO

  $sql = "SELECT b.type_name, a.object_name, a.object_qtd FROM estoque_db.object a 
          INNER JOIN estoque_db.object_type b ON b.type_id = a.type_id;"; // QUERY A SER EXECUTADA
  $resultado = mysqli_query($conn, $sql); // EXECUTA A QUERY

  if ($resultado) { // SE RETORNAR ALGUM RESULTADO
    while ($dados = mysqli_fetch_assoc($resultado)) { // ENQUANTO HOUVER DADOS PREENCHE AS VARIAVEIS
      $type = $dados['type_name'];
      $object = $dados['object_name'];
      $qtd = $dados['object_qtd'];

      // ADICIONA VALORES NO ARRAY
      $array_resultado[] = array( 'type' => $type, 'object' => $object, 'qtd' => $qtd);
    }
  } else {
    $array_resultado = false;
  }

  echo json_encode($array_resultado); // RETORNA PARA JS O ARRAY
?>