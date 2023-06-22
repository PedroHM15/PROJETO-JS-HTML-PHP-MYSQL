<?php
require_once("conexao.php");
$id = $_POST["id"];
$sql = "UPDATE alocacao SET quantidade = (quantidade - 1) WHERE id = $id;";

$conexao->query($sql);

$conexao->close();

echo '<script> alert("Venda Realizada com Sucesso"); window.location.href = "../index.html";</script>'
?>