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
<form method="POST" action="ej06.php">
      <label>Tamaño: <input type="text" name="tamanio" /></label>
      <input type="submit"/><br>
      <form/>
      ';
  
$footer = '
</body>
</html>';
echo $head;
// Imprimir la siguiente tabla de multiplicar generada automáticamente en PHP. Modifique el ejercicio para que el límite de la tabla sea ingresado por un usuario.
$tamanio = $_POST['tamanio'];
echo '<table>';
for ($t=0; $t <= $tamanio; $t++) {  
  if($t == 0){
    echo "<th></th>";
  }
  else{
    echo "<th class='amarillo'>$t</th>";
  }
}
 for ($i=1; $i <= $tamanio; $i++) { 
    echo "<tr>";
    echo "<td class='amarillo'> $i </td>";

  for ($j=1; $j <= $tamanio ; $j++) { 
      if($i == $j){
     echo "<td class='amarillo'>".$i*$j."</td>";
  }else{
    echo "<td>".$i*$j."</td>";
  }
  }
}
  echo "</tr>";

echo "</table>";
echo $footer;
?>