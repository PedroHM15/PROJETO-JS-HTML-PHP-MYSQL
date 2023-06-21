<?php
require_once("conexao.php");
$sql = "SELECT * FROM alocacao";

$resultado = $conexao->query($sql);

if($resultado->num_rows > 0){
    $alocacao = array();
    while($row = $resultado->fetch_assoc()){
        $alocacao[] = $row;
    }
    echo json_encode($alocacao);    
}
$conexao->close();
?>