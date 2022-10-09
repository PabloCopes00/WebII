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
<form method="POST" action="ej09.php">
<label>Nombre:</label>
<input type="text" name="nombre" required />
<label>Apellido:</label>
<input type="text" name="apellido" required />
<label>Edad:</label>
<input type="number" name="edad" required />
<label>Masculino</label><input type="radio" name="genero" value="Masculino" required />
<label>Femenino</label><input type="radio" name="genero" value="Femenino" required />
<select name="pais">
<option value="pais_">Pais</option>
<option value="Argentina">Argentina</option>
<option value="Francia">Francia</option>
</select>
<label>Deportes</label><input type="checkbox" name="intereses" value="Deportes">
<label>Computación</label><input type="checkbox" name="intereses" value="Computacion">
<input type="submit" />
</form>
<button><a href="ej09.php">Volver</a></button><br><br><br>';

  
$footer = '
</body>
</html>';
echo $head;

   if (!empty($_POST)){
   $nombre = $_POST['nombre'];
   $apellido = $_POST['apellido'];
   $edad = $_POST['edad'];
   $genero =  $_POST['genero'];
   $pais =  $_POST['pais'];
   $interes =  $_POST['intereses'];

   
   echo("Nombre: $nombre <br>");
   echo("Apellido: $apellido <br>");
   echo("Edad: $edad <br>");
   echo("Genero: $genero <br>");
   echo("Pais: $pais <br>");
   echo("Interes: $interes <br> <br> <br> <br>");
   var_dump($_POST);

   echo "<br> <br> <br> <br>";

   $arregloFormulario = array();
   
   $arregloFormulario = $_POST;

    foreach ($arregloFormulario as $key => $value) {
      echo "$key: $value <br>";
    }

   }
echo $footer;
?>