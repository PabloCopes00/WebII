<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba de php</title>
  </head>
  <body>
    <h1>Probando una lista dinamica en php</h1>
    <?php
  #abro un ul para decir que va a ser una lista desordenada.
  echo "<ul>";
  
#creo un arreglo y lo lleno con datos
$arregloNombres = array ("Juan", "Pedro", "Pablo", "Laura");
#recorro el arreglo y lo muestro en pantalla
foreach($arregloNombres as $nombre)
{
  #guardo dentro de la variable CADENA mi concatenacion de texto que uso en el arreglo
   $cadena = "<li>$nombre</li>";
   #muestro la cadena en pantalla
   echo ($cadena);


}
#cierro ul
  echo "</ul>";

    ?>
  </body>
</html>