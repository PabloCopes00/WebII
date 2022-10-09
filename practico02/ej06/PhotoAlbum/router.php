<?php

require_once 'route.php';

define('BASE_URL', '//'.$_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']).'/');

$action = 'images'; // accion por defecto

if (!empty($_GET['action'])) {
    $action = $_GET['action']; 
}


$params = explode('/', $action); // genera un arreglo
    
  switch ($params[0]) {
    
     case 'images':
       if (empty($params[1])) {
             showImages();
             break;
         } 
         else {
            $id = $params[1];
           showImages();
           break;
         }
     default:
         echo "error 404";
         break;
  }