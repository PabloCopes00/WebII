<?php




function sumar ($op1, $op2){
  return $op1 + $op2;
}
function restar ($op1, $op2){
  return $op1 - $op2;
}
function multiplicar ($op1, $op2){
  return $op1 * $op2;
}
function dividir ($op1, $op2){
  if ($op2 != 0){
    return $op1 / $op2;
  }
  else{
    echo("No se puede dividir por 0");
    die();
  }
}

?>