<?php
    
    require_once ('operaciones.php');
    
    if (!is_numeric ($_REQUEST['valor1']) || 
        !is_numeric( $_REQUEST['valor2']) || 
        empty ($_REQUEST['operacion'])) {
    echo "ERROR: parametros incorrectos ";
    die();
       }

$operador1 = $_REQUEST['valor1'];
$operador2 = $_REQUEST['valor2'];
$operacion = $_REQUEST['operacion'];

switch ($operacion){
  case 'sumar':{
    $resultado = sumar($operador1, $operador2);
    break;
  }
  case 'restar':{
    $resultado = restar($operador1, $operador2);
    break;
  }
  case 'multiplicar':{
    $resultado = multiplicar($operador1, $operador2);
    break;
  }
  case 'dividir':{
    $resultado = dividir($operador1, $operador2);
    break;
  }
  default: {
    echo ("Operacion no valida");
    break;
  }

}

echo ("el resultado es: $resultado");

?>