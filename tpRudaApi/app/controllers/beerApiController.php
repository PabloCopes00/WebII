<?php
require_once './app/models/beerApiModel.php';
require_once './app/views/beerApiView.php';
require_once './app/helpers/authApiHelper.php';

class BeerApiController {

    private $model;
    private $view;
    private $data;
    private $authHelper;

    public function __construct() {
        $this->model = new BeerApiModel();
        $this->view = new BeerApiView();
        $this->authHelper = new AuthApiHelper();
        $this->data = file_get_contents("php://input");
    }

    private function getData() {
        return json_decode($this->data);
    }

    public function  getBeers($params = null) {    
                //filter
        if(!empty($_GET['field']) || !empty($_GET['data'])){
            $field =  htmlentities($_GET['field']);
            $data = htmlentities($_GET['data']);
            $dataField = "WHERE $field = '$data'";
            $beerFilter = $this->model->getLimit($dataField);
            $this->view->response($beerFilter, 200);
            die();
        }    
                // PAGINATION
        if (!empty($_GET['page'])){  
            $page =  htmlentities($_GET['page']);
            $limit = htmlentities($_GET['limit']); // esto podria sacarse y dejar uno por defecto.
            
            if($limit == null){
                $limit = 4;
            }      
            $inicio = ((int)$page - 1) * (int)$limit;  
            $actLimit = "LIMIT $inicio,$limit";
            $beerPagination = $this->model->getLimit($actLimit);
            $this->view->response($beerPagination, 200);
                die();
        }
                // SORT & ORDER
        if (!empty($_GET['sort']) || !empty($_GET['order'])){
            $sort = htmlentities($_GET['sort']); // ordenamiento por clasificacion
            $order = htmlentities($_GET['order']) ; // ordenamiento de las cervezas ascendente o descendente
            if ($sort == null){
                $sort = 'id';    // funciona pero tira error de q no conoce el array linea 42.
            }
            if ($order == null){
                $order = 'asc';
            }    
                $orderedList = $this->model->order($order, $sort);
                $this->view->response($orderedList, 200);
                die();
        }
                // GET ID 
        if ($params != null){
            $id = $params[':ID'];
            $beer = $this->model->get($id);
            if ($beer){
                $this->view->response($beer, 200);
            }
            else{
                $this->view->response("La cerveza con el id $id no existe", 404);
            }
        } 
        else{   /** GET ALL */
            $id = $params;
            $beers = $this->model->get($id);
            $this->view->response($beers, 200);
        }
    }   

    public function addBeer($params = null) {
        $data = $this->getData();

        if (empty($data->fk_id_name) || empty($data->type) || empty($data->container) || empty($data->stock) || empty($data->price)) {
            $this->view->response("Complete los datos", 400);
        } else {
            $id = $this->model->save($data->fk_id_name, $data->type, $data->container, $data->stock, $data->price);
            $beer = $this->model->get($id);
            $this->view->response($beer, 201);
        }
    }

    public function updateBeer($params = null) {
        $id = $params[':ID'];
        $data = $this->getData();
        $beer = $this->model->get($id);
        if ($beer) {
            $this->model->update($id, $data->fk_id_name, $data->type, $data->container, $data->stock, $data->price);
            $beer = $this->model->get($id);
            $this->view->response($beer, 200);
        } else
            $this->view->response("La cerveza con el id $id no existe", 404);
    }

    public function deleteBeer($params = null) {

        if(!$this->authHelper->isLoggedIn()){
            $this->view->response("No estas logeado", 401);
            return;
        }
        
        $id = $params[':ID'];
        $beer = $this->model->get($id);
        if ($beer) {
            $this->model->delete($id);
            $this->view->response("La cerveza fue borrada con exito.", 200);
        } else
            $this->view->response("La cerveza con el id $id no existe", 404);
    }
}
