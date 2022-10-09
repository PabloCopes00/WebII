<?php
require_once './app/models/beerdesc.model.php';
require_once './app/views/beerdesc.view.php';

class BeerDesc{
   private $model;
   private $view;

   public function __construct(){
    $this->model = new BeerDescModel();
    $this->view = new BeerDescView();
}

public function showBeerDesc() {
    $beerDesc = $this->model->getAllBeerDesc();
    $this->view->showBeerDesc($beerDesc);
}
function addBeerDesc() {
    // TODO: validar entrada de datos
    
    $beer_name = $_POST['beer_name'];
    $abv = $_POST['abv'];
    $ibu = $_POST['ibu'];
    $description = $_POST['description'];
    $img = $_POST['img'];
    $id = $this->model->insertBeer($beer_name, $abv, $ibu, $description, $img);
}
function deleteBeerDesc($id) {
    $this->model->deleteBeerById($id);
}
}







