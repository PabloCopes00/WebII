<?php
   
   if (!empty($_POST)){
   $nombre = $_POST['nombre'];
   $apellido = $_POST['apellido'];
   $edad = $_POST['edad'];

   
   echo("Nombre: $nombre <br>");
   echo("Apellido: $apellido <br>");
   echo("Edad: $edad <br>");
   }
   
   ?>
<button><a href="formularioNombre.html">Volver</a></button>
<form method="POST" action="formularioNombre.php">
  <label>Nombre:</label>
  <input type="text" name="nombre" required />
  <label>Apellido:</label>
  <input type="text" name="apellido" required />
  <label>Edad:</label>
  <input type="number" name="edad" required />
  <input type="submit" />
</form>