
<?php
require_once './app/models/home.model.php';
require_once './app/views/home.view.php';

class HomeController {
    private $model;
    private $view;

    public function __construct() {
        $this->model = new HomeModel();
        $this->modelDesc = new BeerDescModel();
        $this->view = new HomeView();
    }

    public function showHome(){
        $beers = $this->model->getAllBeersHome();
        $beerDesc = $this->modelDesc->getAllBeerDesc();
        $this->view->showHome($beers, $beerDesc);
    }
     public function filterCategory($id){

        $name = $this->modelDesc->getNameById($id);
        $filters = $this->model->getFilter($id);
        $beerDesc = $this->modelDesc->getAllBeerDesc();
        $this->view->showFilter($filters, $name, $beerDesc);
     }
}

