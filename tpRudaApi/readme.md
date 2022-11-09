DOCUMENTACION RUDA BEER`S API

    ENDPOINTS:
localhost/tpRudaApi/api/beers/ (GET)
localhost/tpRudaApi/api/beers/ (POST)
localhost/tpRudaApi/api/beers/:ID (GET ID)
localhost/tpRudaApi/api/beers/:ID (PUT)
localhost/tpRudaApi/api/beers/:ID (DELETE)

FILTER 
    para utilizar el filtro, debemos ingresar dos valroes para nuestras keys "field" y "data"
        Los datos que podemos utilizar en FIELD son:
        - type (string) ej: localhost/tpRudaApi/api/beers?field=type&data=Rubia
        - container (string) ej: localhost/tpRudaApi/api/beers?field=container&data=Lata
        - stock (integer) ej: localhost/tpRudaApi/api/beers?field=stock&data=40
        - price (integer) ej: localhost/tpRudaApi/api/beers?field=price&data=550
        - beer_name (string) ej: localhost/tpRudaApi/api/beers?field=beer_name&data=New+England+Ipa
PAGINATION 
    para utilizar la paginacion, debemos ingresar dos valroes para nuestras keys "page" y "limit"
        Los datos que ingresamos en paginacion son integer para ambos valores.
    podemos utilizar solo la key PAGE y por defecto tendra un limite de 4 registros    
        - ej: localhost/tpRudaApi/api/beers?page=1
        - ej2: localhost/tpRudaApi/api/beers?page=1&limit=3              
SORT & ORDER
        para utilizar la paginacion, debemos ingresar dos valroes para nuestras keys "page" y "limit"
        Los datos que ingresamos en paginacion son integer para ambos valores.
        podemos utilizar solo la key PAGE y por defecto tendra un limite de 4 registros    
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


