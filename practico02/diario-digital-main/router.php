<?php
require_once 'noticias.php';
require_once 'about.php';

define('BASE_URL', '//'.$_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']).'/');

// leo el parametro accion
$action = 'home'; // accion por defecto
if (!empty($_GET['action'])) {
    $action = $_GET['action'];  // action => about/juan
}

// parsea la accion Ej: about/juan --> ['about', 'juan']
$params = explode('/', $action); // genera un arreglo
    
switch ($params[0]) {
    case 'home':
        showHome();
        break;
    case 'tabla':
        showNoticia($params[1]);
        break;
    case 'tabla':
        if (empty($params[1])) {
            showAbout();
        } else {
            showAbout($params[1]);
        }
        break;
    default:
        echo "404 not found";
        # code...
        break;
}