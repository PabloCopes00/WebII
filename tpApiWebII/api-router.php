<?php
require_once './libs/Router.php';
require_once './app/controllers/beerApiController.php';
require_once './app/controllers/authApiController.php';

$router = new Router();

$router->addRoute('beers', 'GET', 'BeerApiController', 'getBeers');
$router->addRoute('beers/:ID', 'GET', 'BeerApiController', 'getBeers');
$router->addRoute('beers', 'POST', 'BeerApiController', 'addBeer');
$router->addRoute('beers/:ID', 'DELETE', 'BeerApiController', 'deleteBeer');
$router->addRoute('beers/:ID', 'PUT', 'BeerApiController', 'updateBeer');
$router->addRoute("auth/token", 'GET', 'AuthApiController', 'getToken');

$router->route($_GET["resource"], $_SERVER['REQUEST_METHOD']);
