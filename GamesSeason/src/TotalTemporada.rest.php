<?php
require_once('../../lib/conexao.php');
//require_once('../../conn/commons.inc.php');
date_default_timezone_set('America/Sao_Paulo');

//$inputs = json_decode( file_get_contents('php://input'), true);

$conexao = conexao::getInstance();
$sql = '
SELECT 
coalesce(min( mintemp ),0)  mintemp
, coalesce(max( maxtemp ),0)  maxtemp
, coalesce(sum(recordemin),0) recordemin
, coalesce(sum(recordemax),0) recordemax
, coalesce(count(jogo_id),0) TotalJogos
, coalesce( max(placar),0) placar
FROM jogos';
$stm = $conexao->prepare($sql);
//$stm->bindValue(':usuario', $inputs['usuario']);
$stm->execute();
$temporada = $stm->fetchAll(PDO::FETCH_OBJ);
print_r(json_encode($temporada));
?>