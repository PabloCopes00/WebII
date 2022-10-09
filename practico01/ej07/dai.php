 <?php

echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="inversion.php" method="POST">
    <h1>Ingrese un monto a invertir</h1>
    <input type="number" step="any" name="monto"/>
    <h1>Ingrese la tasa de interés a aplicar</h1>
    <input type="number" step="any" name="interes"/>
    <input type="submit"/>
    </form>
';
 if (!empty($_POST)){ // aparte de que este seteado me asegura de que tenga algun valor
  
$monto= $_POST ['monto'];
$interes= $_POST ['interes'];
$montoFinal = ($interes/100);

$meses= [
    "Enero" => $montoFinal,
    "Febrero" => $montoFinal,
    "Marzo" => $montoFinal,
    "Abril" => $montoFinal,
    "Mayo" => $montoFinal,
    "Junio" => $montoFinal,
    "Julio" => $montoFinal,
    "Agosto" => $montoFinal,
    "Septiembre" => $montoFinal,
    "Octubre" => $montoFinal,
    "Noviembre" => $montoFinal,
    "Diciembre" => $montoFinal
];

$i =1;
     echo "<table>";
        foreach ($meses as $mes => $key) {
            echo "<tr><th>".$mes."</th><td>$".$monto+($key*$i*$monto)."</td></tr>";
            $i++;
        }
    
    echo "</table>"; 
 }
 
echo "</body>
</html>";