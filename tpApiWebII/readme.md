DOCUMENTACION RUDA BEER`S API

    ENDPOINTS:
localhost/tpRudaApi/api/beers/ (GET)
localhost/tpRudaApi/api/beers/ (POST)
localhost/tpRudaApi/api/beers/:ID (GET ID)
localhost/tpRudaApi/api/beers/:ID (PUT)
localhost/tpRudaApi/api/beers/:ID (DELETE)

GET ALL:
        Para poder traernos todos los registros utilizamos el metodo GET.
        ej: localhost/tpRudaApi/api/beers/       
GET BY ID:
        Para poder traernos un solo regisro utilizamos el ID.
        localhost/tpRudaApi/api/beers/:ID
        ej: localhost/tpRudaApi/api/beers/19
POST: 
PUT:
FILTER: 
    Para utilizar el filtro, debemos ingresar dos valroes para nuestras keys "field" y "data"
    par usar el filtro se debe poner  'field' (una columna) y data (algo que este dentro de la base de datos)
        Los datos que podemos utilizar en DATA son: 
        - Cualquier tipo de dato que pueda tener el valor de algun campo en la bbdd
        - ej: data=Rubia
        Los datos que podemos utilizar en FIELD son:
        - type (string) ej: localhost/tpRudaApi/api/beers?field=type&data=Rubia
        - container (string) ej: localhost/tpRudaApi/api/beers?field=container&data=Lata
        - stock (integer) ej: localhost/tpRudaApi/api/beers?field=stock&data=40
        - price (integer) ej: localhost/tpRudaApi/api/beers?field=price&data=550
        - beer_name (string) ej: localhost/tpRudaApi/api/beers?field=beer_name&data=New+England+Ipa
PAGINATION: 
    Para utilizar la paginacion debemos ingresar dos valroes para nuestras keys "page" y "limit"
        Los datos que ingresamos en paginacion son integer para ambos valores.
    Podemos utilizar solo la key PAGE y por defecto tendra un limite de 3 registros    
        - ej: localhost/tpRudaApi/api/beers?page=1
        - ej2: localhost/tpRudaApi/api/beers?page=1&limit=4              
SORT & ORDER
        Para utilizar el SORT & ORDER debemos ingresar dos valroes para nuestras keys "sort" y "order"
        Los datos que ingresamos en 'sort' deben ser de tipo 'string'(columnas de nuestra bbdd) y en 'order' deben ser de tipo 'string' en minuscula 'asc' y 'desc'.
        SORT:
         - type
        - container
        - stock
        - price
        - beer_name
        ORDER: 
        - asc
        - desc
        ej: localhost/tpRudaApi/api/beers?sort=id&order=desc (ASC/DESC)

    se puede empezar filtrando, hacer filtrado y orden, y para finalizar la paginacion.
    esto quedaria de la siguiente manera:
    ej: localhost/tpRudaApi/api/beers?field=type&data=Rubia
    ej2: localhost/tpRudaApi/api/beers?field=type&data=Rubia&sort=id&order=asc
    ej3: localhost/tpRudaApi/api/beers?field=type&data=Rubia&sort=id&order=asc&page=1&limit=4
    
    otra forma de filtrar es por orden
    - solo por orden, luego orden y luego paginacion
    - puede ser solo 'page', y por defecto el 'limit' queda en 3 por defecto
    localhost/tpRudaApi/api/beers?sort=id&order=asc (asc/desc)
    localhost/tpRudaApi/api/beers?sort=id&order=asc?&page=1 (por defecto limite 3)
    localhost/tpRudaApi/api/beers?sort=id&order=asc?&page=1&limit=4

    FIN

