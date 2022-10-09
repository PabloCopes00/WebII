<?php
$head = '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="ej06.css">
  <title>Document</title>
</head>
<body>
      <form method="POST" action="ej07.php">
      <label>interes: <input type="number" step="any" name="interes" /></label>
      <label>monto: <input type="number" step="any" name="monto" /></label>
      <input type="submit" />
      </form><br>
      ';
  
$footer = '
</body>
</html>';
echo $head;
// Una persona desea invertir dinero en un banco, el cual le otorga un % de interés mensual. Escribir un programa para simular la inversión que imprima cuál será la cantidad de dinero que esta persona tendrá mes a mes durante un año. Genere una tabla HTML para mostrar el resultado.
if(!empty($_POST)){
 $monto = $_POST['monto'];
 $interesBase = $_POST['interes'];

 $interes = ($interesBase/100);

$meses = [
  "Enero" => $interes,
  "Febrero" => $interes,
  "Marzo" => $interes,
  "Abril" => $interes,
  "Mayo" => $interes,
  "Junio" => $interes,
  "Julio" => $interes,
  "Agosto" => $interes,
  "Septiembre" => $interes,
  "Octubre" => $interes,
  "Noviembre" => $interes,
  "Diciembre" => $interes
];
$i = 1;
echo "<table>";
foreach ($meses as $mes => $key) {  
  echo "<tr><th>".$mes."</th><td>$".$monto+($key*$i*$monto)."</td></tr>"; 
     $i++;
}
echo "</table>";

}


echo $footer;