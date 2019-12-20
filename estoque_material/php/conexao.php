<?php
	$servidor = "localhost"; //NOME DO SERVIDOR
	$usuario = "root"; //USUARIO DO BANCO
	$senha = ""; //SENHA DO BANCO
	$dbname = "estoque_db"; //NOME DO BANCO
	
	//CRIA CONEXAO
	$conn = mysqli_connect($servidor, $usuario, $senha, $dbname);
	mysqli_set_charset($conn, 'utf8');
    
	if (!$conn) {
			die('Erro ao conectar ao banco: ' . mysql_error());
	}
?>