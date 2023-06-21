<?php
$host = "localhost";
$user = "root";
$senha = "";
$banco = "testeprova";

$conexao = new mysqli($host, $user, $senha, $banco);

if($conexao ->connect_error){
    die("Erro" . $conexao -> connect_error);
}
?>