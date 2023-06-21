<?php
require_once("conexao.php");
$sql = "SELECT * FROM concessionarias";

$resultado = $conexao->query($sql);

if($resultado->num_rows > 0){
    $concessionarias = array();
    while($row = $resultado->fetch_assoc()){
        $concessionarias[] = $row;
    }
    echo json_encode($concessionarias);    
}
$conexao->close();

?>