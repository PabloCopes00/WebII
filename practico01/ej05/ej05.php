<?php
$head = '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
<form method="POST" action="ej05.php">
      <label>Peso: <input type="text" name="peso" /></label>
      <label>Altura: <input type="text" name="altura" /></label>
      <input type="submit"/>
      ';
  
$footer = '
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>';
echo $head;
// Construir un programa que calcule el índice de masa corporal de una persona (IMC = peso [kg] / altura [m]2) e informe el estado en el que se encuentra esa persona en función del valor de IMC.
$peso = $_POST['peso'];
$altura = $_POST['altura'];
$imc = $peso/pow($altura,2);

if($imc < 18.50){
  $estado = "Bajo peso.";
}
else if($imc > 18.50 && $imc < 24.99){
  $estado = "Normal.";
}
else if($imc >= 25){
  $estado = "Sobrepeso.";
}
else if($imc >= 30){
  $estado = "Obeso.";
}
echo "<br>Su altura es: $altura<br>Su peso es: $peso<br>Su Indice de masa corporal es: $imc<br>Su estado es: $estado";
echo $footer;
?>