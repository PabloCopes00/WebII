<?php

// Modifique el ejercicio 2 para que el usuario mediante links html pueda ir modificando el tamaño de la lista generada.

$head = '<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>';
$footer = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"></script>
</body> 
  </html>';


echo $head;

$arregloNombres = array ("Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura","Juan", "Pedro", "Pablo", "Laura");
 
echo '<a href="ej04.php?id=0"><button class="btn btn-outline-success me-2" type="button">No mostrar nada</button></a>' ;
echo '<a href="ej04.php?id=5"><button class="btn btn-outline-success me-2" type="button">Mostrar los primeros 5</button></a>' ;
echo '<a href="ej04.php?id=10"><button class="btn btn-outline-success me-2" type="button">Mostrar los primeros 10</button></a>';
echo '<a href="ej04.php?id=20"><button class="btn btn-outline-success me-2" type="button">Mostrar los primeros 20</button></a>';
echo '<a href="ej04.php?id=' . count($arregloNombres) . '"><button class="btn btn-outline-success me-2" type="button">Mostrar todos</button></a>';
if (isset($_GET["id"])){
  $id = $_GET["id"];
}else{
  $id = 0;
}
echo "<ul>";

for ($i=0; $i < $id; $i++) { 
  echo "<li>$arregloNombres[$i]</li>";
}



echo "</ul>";

echo $footer;

?>