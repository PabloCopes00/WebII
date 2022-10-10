<?php
require_once './app/controllers/beer.controller.php';
require_once './app/controllers/beerdesc.controller.php';
require_once './app/controllers/home.controller.php';

define('BASE_URL', '//'.$_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']).'/');

$action = 'home'; // acción por defecto

if (!empty($_GET['action'])) {
    $action = $_GET['action'];
}

// parsea la accion Ej: dev/juan --> ['dev', juan]
$params = explode('/', $action);



// tabla de ruteo
switch ($params[0]) {
   case 'home':
      $homeController = new HomeController();
      $homeController->showHome();
      break;
   case 'showBeers':
      $beerController = new BeerController();
      $beerController->showBeers();
      break;
   case 'beerDesc':
      $beerDescController = new BeerDesc();
      $beerDescController->showBeerDesc();
      break;  
   case 'addBeer':
      $beerController = new BeerController();
      $beerController->addBeer();
      break;
   case 'addBeerDesc':
      $beerDescController = new BeerDesc();
      $beerDescController->addBeerDesc();
      break;
   case 'showEdit':
      $id = $params[1];
      $beerController  = new BeerController();
      $beerController ->showEditBeer($id);  
       break;
   case 'editBeer':
      $id = $params[1];
      $beerController  = new BeerController();
      $beerController ->insertEditBeer($id);  
       break;
   case 'deleteBeerDesc':
      $id = $params[1];
       $beerDescController = new BeerDesc();
       $beerDescController->deleteBeerDesc($id);  
       break;
   case 'deleteBear':
      $id = $params[1];
      $beerController = new BeerController();
      $beerController->deleteBeer($id);  
          break;            
   default:
       echo('404 Page not found');
       break;
}     
