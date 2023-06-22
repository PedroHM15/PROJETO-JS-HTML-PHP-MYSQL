<?php
require_once("conexao.php");
$sql = "SELECT * FROM clientes";

$resultado = $conexao->query($sql);

if($resultado->num_rows > 0){
    $clientes = array();
    while($row = $resultado->fetch_assoc()){
        $clientes[] = $row;
    }
    echo json_encode($clientes);    
}
$conexao->close();

?>