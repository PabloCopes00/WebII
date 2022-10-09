<?php
require_once 'ej05.php';

define('BASE_URL', '//'.$_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']).'/');

// leo el parametro accion
$action = 'tabla'; // accion por defecto

if (!empty($_GET['action'])) {
    $action = $_GET['action'];  // action => about/juan
}

// parsea la accion Ej: about/juan --> ['about', 'juan']
$params = explode('/', $action); // genera un arreglo
    
 switch ($params[0]) {
     case 'tabla':
         if (empty($params[1])) {
              $id = 12;
             showTable($id);
             break;
         } 
         else {
            $id = $params[1];
           showTable($id);
           break;
        }
    case 'form':
            $id = $_POST['tamanio'];
            showTable($id);
            break;
    default:
         echo "no funco gil";
         break;
  }