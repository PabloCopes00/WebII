<?php
require_once './app/models/beerApiModel.php';
require_once './app/views/beerApiView.php';

class BeerApiController {

    private $model;
    private $view;
    private $data;

    public function __construct() {
        $this->model = new BeerApiModel();
        $this->view = new BeerApiView();
        $this->data = file_get_contents("php://input");
    }

    private function getData() {
        return json_decode($this->data);
    }

    public function  getBeers($params = null) {
        $beers = $this->model->get();
        $this->view->response($beers, 200);
    }

    public function getBeer($params = null) {
        $id = $params[':ID']; 
        $beer = $this->model->getById($id);
        if ($beer)
            $this->view->response($beer, 200);
        else
            $this->view->response("La cerveza con el id=$id no existe", 404);
    } 
    
    public function addBeer($params = null) {
        $data = $this->getData();

        if (empty($data->fk_id_name) || empty($data->type) || empty($data->container) || empty($data->stock) || empty($data->price)) {
            $this->view->response("Complete los datos", 400);
        } else {
            $id = $this->model->save($data->fk_id_name, $data->type, $data->container, $data->stock, $data->price);
            $beer = $this->model->getById($id);
            $this->view->response($beer, 201);
        }
    }

    public function updateBeer($params = null) {
        $id = $params[':ID'];
        $data = $this->getData();
        $beer = $this->model->get($id);
        if ($beer) {
            $this->model->update($id, $data->fk_id_name, $data->type, $data->container, $data->stock, $data->price);
            $beerupd = $this->model->getById($id);
            $this->view->response($beerupd, 200);
        } else
            $this->view->response("La cerveza con el id=$id no existe", 404);
    }

    public function deleteBeer($params = null) {
        $id = $params[':ID'];
        $beer = $this->model->getById($id);
        if ($beer) {
            $this->model->delete($id);
            $this->view->response("La cerveza fue borrada con exito.", 200);
        } else
            $this->view->response("La cerveza con el id=$id no existe", 404);
    }
}
