<?php
require_once("conexao.php");
$sql = "SELECT modelo, preco FROM automoveis INNER JOIN alocacao ON automoveis.id = alocacao.automovel where alocacao.area = 1";

$resultado = $conexao->query($sql);

if($resultado->num_rows > 0){
    $modelo = array();
    while($row = $resultado->fetch_assoc()){
        $modelo[] = $row;
    }
    echo json_encode($modelo);    
}
$conexao->close();
?>