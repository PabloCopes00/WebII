<?php
require_once './app/models/beer.model.php';
require_once './app/views/beer.view.php';
require_once './app/helpers/auth.helper.php';

class BeerController {
    private $model;
    private $view;
    private $modelDesc;

    public function __construct() {
        $this->model = new BeerModel();
        $this->modelDesc = new BeerDescModel();
        $this->view = new BeerView();

        $authHelper = new AuthHelper();
       // $authHelper->checkLoggedIn();
    }

    public function showBeers() {
        $beers = $this->model->getAllBeers();
        $beerDesc = $this->modelDesc->getAllBeerDesc();
        $this->view->showBeers($beers, $beerDesc);

    }   
    
    public function showDetail($id){
     $detail = $this->modelDesc->getRegisterDescById2($id);
     $this->view->showDetail($detail);
    }

    function addBeer() {
        if((isset($_POST['type'])&&isset($_POST['container'])&&isset($_POST['stock'])&&isset($_POST['price'])&&isset($_POST['beerOption']))&&!empty($_POST['type'])&&!empty($_POST['container'])&&!empty($_POST['stock'])&&!empty($_POST['price'])&&!empty($_POST['beerOption'])){      
            $type = $_POST['type'];
            $beerOption = $_POST['beerOption'];
            $container = $_POST['container'];
            $stock = $_POST['stock'];
            $price = $_POST['price'];
            //agrego imagen
        if ($_FILES['input_name']['type'] =="image/jpg" ||
            $_FILES['input_name']['type'] =="image/jpeg"||
            $_FILES['input_name']['type'] =="image/png" ){
            $this->model->insertBeer($type, $container, $stock, $price, $beerOption, $_FILES['input_name']['tmp_name']);
        }
        else{
                $id = $this->model->insertBeer($type, $container, $stock, $price, $beerOption);
        }
                header("Location: " . BASE_URL. 'showBeers');
            }
    }

    function  showEditBeer($id){
            $beers = $this->model->getRegisterById($id);
            $beerDesc = $this->modelDesc->getRegisterDescById($id);
            $this->view->showEditBeers($beers, $beerDesc);
    }

    function insertEditBeer($id){
        if((isset($_POST['type'])&&isset($_POST['container'])&&isset($_POST['stock'])&&isset($_POST['price'])&&isset($_POST['beerOption']))&&!empty($_POST['type'])&&!empty($_POST['container'])&&!empty($_POST['stock'])&&!empty($_POST['price'])&&!empty($_POST['beerOption'])){      
            $type = $_POST['type'];
            $beerOption = $_POST['beerOption'];
            $container = $_POST['container'];
            $stock = $_POST['stock'];
            $price = $_POST['price'];


   
            $this->model->insertEditBeer($type, $container, $stock, $price, $beerOption, $id);
            header("Location: " . BASE_URL. 'showBeers');
        }
    }
     // borrar el registro del id seleccionado (boton)
     function deleteBeer($id) {
         $this->model->deleteBeerById($id);
     }
    
     public function filterCategory($id){

        $name = $this->modelDesc->getNameById($id);
        $filters = $this->model->getFilter($id);
        $beerDesc = $this->modelDesc->getAllBeerDesc();
        $this->view->showFilter($filters, $name, $beerDesc);
     }

}


