<?php
require_once './app/models/beerApiModel.php';
require_once './app/views/beerApiView.php';
require_once './app/helpers/authApiHelper.php';

class BeerApiController
{

    private $model;
    private $view;
    private $data;
    private $authHelper;

    public function __construct()
    {
        $this->model = new BeerApiModel();
        $this->view = new BeerApiView();
        $this->authHelper = new AuthApiHelper();
        $this->data = file_get_contents("php://input");
    }

    private function getData()
    {
        return json_decode($this->data);
    }

    public function  getBeers($params = null)
    {
        $getWLorder = ['asc', 'desc'];
        $getWLsort = ['id', 'beer_name', 'type', 'container', 'stock', 'price'];
        $query = null;
        // WHERE beer_name = 'New England Ipa' ORDER BY price DESC LIMIT 1,2
        if (isset($_GET['field']) && isset($_GET['data'])) {
            if (in_array($_GET['field'], $getWLsort)) {
                $data = ucwords($_GET['data']);
                $field = $_GET['field'];
            }
            $query = "WHERE $field = ? ";

            if (isset($_GET['sort']) && isset($_GET['order']) && empty($_GET['page'])) {
                if (in_array($_GET['sort'], $getWLsort) && (in_array($_GET['order'], $getWLorder))) {
                    $sort = $_GET['sort'];
                    $order = $_GET['order'];
                }
                $query .= " ORDER BY $sort $order";
            } else if (isset($_GET['sort']) && isset($_GET['order']) && in_array($_GET['sort'], $getWLsort) && in_array($_GET['order'], $getWLorder)) {
                $sort = $_GET['sort'];
                $order = $_GET['order'];
                $query .= " ORDER BY $sort $order";
            }
            if (isset($_GET['page']) && is_numeric($_GET['page'])) {
                $page = $_GET['page'];
                if (isset($_GET['limit'])) {
                    if (is_numeric($_GET['limit']))
                        $limit = $_GET['limit'];
                } else {
                    $limit = 3;
                }
                $inicio = ((int)$page - 1) * (int)$limit;
                $query .= " LIMIT $inicio,$limit";
                $ListOrdered = $this->model->getFilOrdered($query, $data);
                $this->view->response($ListOrdered, 200);
            } else {
                $ListOrdered = $this->model->getFilOrdered($query, $data);
                $this->view->response($ListOrdered, 200);
            }
        } else if (isset($_GET['sort']) && isset($_GET['order']) && empty($_GET['page'])) {
            if (in_array($_GET['sort'], $getWLsort) && (in_array($_GET['order'], $getWLorder))) {
                $sort = $_GET['sort'];
                $order = $_GET['order'];
            } else {
                $this->view->response("esa palabra no existe en la WL", 404);
            }
            $query .= " ORDER BY $sort $order";
            $data = " ";
            $ListOrdered = $this->model->getOrdered($query);
            $this->view->response($ListOrdered, 200);
        } else if (isset($_GET['sort']) && isset($_GET['order']) && in_array($_GET['sort'], $getWLsort) && in_array($_GET['order'], $getWLorder)) {
            if (in_array($_GET['sort'], $getWLsort) && in_array($_GET['order'], $getWLorder)) {
                $sort = $_GET['sort'];
                $order = $_GET['order'];
                $query .= " ORDER BY $sort $order";
            } else {
                $this->view->response("esa palabra no existe en la WL", 404);
            }
            if (isset($_GET['page']) && is_numeric($_GET['page'])) {
                $page = $_GET['page'];
                if (isset($_GET['limit'])) {
                    if (is_numeric($_GET['limit']))
                        $limit = $_GET['limit'];
                } else {
                    $limit = 3;
                }
                $inicio = ((int)$page - 1) * (int)$limit;
                $query .= " LIMIT $inicio,$limit";
                $data = " ";
                $ListOrdered = $this->model->getOrdered($query);
                $this->view->response($ListOrdered, 200);
            } else {
                $data = " ";
                $ListOrdered = $this->model->getOrdered($query);
                $this->view->response($ListOrdered, 200);
            }
        } else {
            // GET ID 
            if ($params != null) {
                $id = $params[':ID'];
                $beer = $this->model->get($id);
                if ($beer) {
                    $this->view->response($beer, 200);
                } else {
                    $this->view->response("La cerveza con el id $id no existe", 404);
                }
            } else {
                /** GET ALL */
                $id = $params;
                $beers = $this->model->get($id);
                $this->view->response($beers, 200);
            }
        }
    }

    public function addBeer($params = null)
    {
        $data = $this->getData();

        if (empty($data->fk_id_name) || empty($data->type) || empty($data->container) || empty($data->stock) || empty($data->price)) {
            $this->view->response("Complete los datos", 400);
        } else {
            $id = $this->model->save($data->fk_id_name, $data->type, $data->container, $data->stock, $data->price);
            $beer = $this->model->get($id);
            $this->view->response($beer, 201);
        }
    }

    public function updateBeer($params = null)
    {
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

    public function deleteBeer($params = null)
    {

        if (!$this->authHelper->isLoggedIn()) {
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
