<?php
require_once('../../lib/conexao.php');
//require_once('../../conn/commons.inc.php');
date_default_timezone_set('America/Sao_Paulo');

$conexao = conexao::getInstance();

$sql = '
SELECT 
*
FROM jogos';
$stm = $conexao->prepare($sql);
$stm->execute();
$jogos = $stm->fetchAll(PDO::FETCH_OBJ);
print_r(json_encode($jogos));


?>