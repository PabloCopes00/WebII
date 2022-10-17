<?php
require_once './app/models/beerdesc.model.php';
require_once './app/views/beerdesc.view.php';
require_once './app/helpers/auth.helper.php';

class BeerDesc{
   private $model;
   private $view;

   public function __construct(){
    $this->model = new BeerDescModel();
    $this->view = new BeerDescView();
    if (session_status() != PHP_SESSION_ACTIVE) {
        session_start();
    } 
}

public function showBeerDesc() {
    $beerDesc = $this->model->getAllBeerDesc();
    $this->view->showBeerDesc($beerDesc);
}
function addBeerDesc() {
     
    $authHelper = new AuthHelper();
    $authHelper->checkLoggedIn();
    
    $beer_name = $_POST['beer_name'];
    $abv = $_POST['abv'];
    $ibu = $_POST['ibu'];
    $description = $_POST['description'];

    if ($_FILES['input_name']['type'] =="image/jpg" ||
            $_FILES['input_name']['type'] =="image/jpeg"||
            $_FILES['input_name']['type'] =="image/png" ){
            $this->model->insertBeer($beer_name, $abv, $ibu, $description, $_FILES['input_name']['tmp_name']);
        }
        else{
                $this->model->insertBeer($beer_name, $abv, $ibu, $description);
        }
        header("Location: " . BASE_URL. 'beerDesc');
}


function  showEditBeerDesc($id){
    $authHelper = new AuthHelper();
    $authHelper->checkLoggedIn();

    $beerDesc = $this->model->getRegisterDescById2($id);
    $this->view->showEditBeerDesc($beerDesc);
}

function insertEditBeerDesc($id){
    $authHelper = new AuthHelper();
    $authHelper->checkLoggedIn();

    if((isset($_POST['beer_name'])&&isset($_POST['abv'])&&isset($_POST['ibu'])&&isset($_POST['description'])&&isset($_POST['img']))&&!empty($_POST['beer_name'])&&!empty($_POST['abv'])&&!empty($_POST['ibu'])&&!empty($_POST['description'])&&!empty($_POST['img'])){      
        $beer_name = $_POST['beer_name'];
        $abv = $_POST['abv'];
        $ibu = $_POST['ibu'];
        $description = $_POST['description'];
        $img = $_POST['img'];

        $this->model->insertEditBeerDesc($beer_name, $abv, $ibu, $description, $img, $id);
        header("Location: " . BASE_URL. 'beerDesc');
    }
}
function deleteBeerDesc($id) {
    $authHelper = new AuthHelper();
    $authHelper->checkLoggedIn();
    
    $this->model->deleteBeerById($id);
}
}







