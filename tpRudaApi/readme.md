DOCUMENTACION RUDA BEER`S API

    ENDPOINTS:
localhost/tpRudaApi/api/beers/ (GET)
localhost/tpRudaApi/api/beers/ (POST)
localhost/tpRudaApi/api/beers/:ID (GET ID)
localhost/tpRudaApi/api/beers/:ID (PUT)
localhost/tpRudaApi/api/beers/:ID (DELETE)

GET ALL:
        Para poder traernos todos los registrosutilizamos el metodo GET.
        localhost/tpRudaApi/api/beers/
        ej: localhost/tpRudaApi/api/beers/
GET BY ID:
        Para poder traernos un solo regisro utilizamos el ID del registro.
        localhost/tpRudaApi/api/beers/:ID
        ej: localhost/tpRudaApi/api/beers/19
POST: 
FILTER: 
    Para utilizar el filtro, debemos ingresar dos valroes para nuestras keys "field" y "data"
        Los datos que podemos utilizar en FIELD son:
        - type (string) ej: localhost/tpRudaApi/api/beers?field=type&data=Rubia
        - container (string) ej: localhost/tpRudaApi/api/beers?field=container&data=Lata
        - stock (integer) ej: localhost/tpRudaApi/api/beers?field=stock&data=40
        - price (integer) ej: localhost/tpRudaApi/api/beers?field=price&data=550
        - beer_name (string) ej: localhost/tpRudaApi/api/beers?field=beer_name&data=New+England+Ipa
PAGINATION: 
    Para utilizar la paginacion debemos ingresar dos valroes para nuestras keys "page" y "limit"
        Los datos que ingresamos en paginacion son integer para ambos valores.
    Podemos utilizar solo la key PAGE y por defecto tendra un limite de 4 registros    
        - ej: localhost/tpRudaApi/api/beers?page=1
        - ej2: localhost/tpRudaApi/api/beers?page=1&limit=3              
SORT & ORDER
        Para utilizar el SORT & ORDER debemos ingresar dos valroes para nuestras keys "sort" y "order"
        Los datos que ingresamos en 'sort' deben ser de tipo 'string' y en 'order' puede ser 'integer' como 'string'.

        Podemos utilizar solo la key 'sort' y por defecto tomara 'order' ASCENDETE y en caso de ser 'order' tomara por defecto 'sort' ID.   
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



