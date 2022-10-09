
<?php
require_once './app/models/home.model.php';
require_once './app/views/home.view.php';

class HomeController {
    private $model;
    private $view;

    public function __construct() {
        $this->model = new HomeModel();
        $this->view = new HomeView();
    }

    public function showHome(){
        $beers = $this->model->getAllBeersHome();
        $this->view->showHome($beers);
    }
}

