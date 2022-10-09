<?php
require_once './app/pagos.php';

define('BASE_URL', '//'.$_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']).'/');

$action = 'pay'; // acción por defecto
if (!empty($_GET['action'])) {
    $action = $_GET['action'];
}

// parsea la accion Ej: dev/juan --> ['dev', juan]
$params = explode('/', $action);


// tabla de ruteo
switch ($params[0]) {
    case 'pay':
        showPayment();
        break;
    // case 'add':
    //     addPagos();
    //     break;
    // case 'delete':
    //     // obtengo el parametro de la acción
    //     $id = $params[1];
    //     deletePagos($id);
    //     break;
    default:
        echo('404 Page not found');
        break;
}

