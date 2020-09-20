<?php
require_once('../../lib/conexao.php');
date_default_timezone_set('America/Sao_Paulo');
$inputs = json_decode( file_get_contents('php://input'), true);

//print_r($inputs); die;

$sql = 'INSERT INTO jogos (placar,mintemp,maxtemp,recordemin,recordemax, partida, data_cadastro)
VALUES(:placar, :mintemp,:maxtemp,:recordemin , :recordemax, :partida, NOW())';
$conexao = conexao::getInstance();
$stm = $conexao->prepare($sql);
$stm->bindValue(':placar', $inputs['placar']);
$stm->bindValue(':mintemp', $inputs['mintemp']);
$stm->bindValue(':maxtemp',  $inputs['maxtemp']);
$stm->bindValue(':recordemin',  $inputs['recordemin']);
$stm->bindValue(':recordemax',  $inputs['recordemax']);
$stm->bindValue(':partida',  $inputs['partida']);
$retorno = $stm->execute();
print_r($retorno);




?>