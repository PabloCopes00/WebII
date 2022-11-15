DOCUMENTACION RUDA BEER`S API

                ENDPOINTS:
    localhost/tpRudaApi/api/beers/ (GET)
    localhost/tpRudaApi/api/beers/ (POST)
    localhost/tpRudaApi/api/beers/:ID (GET ID)
    localhost/tpRudaApi/api/beers/:ID (PUT)
    localhost/tpRudaApi/api/beers/:ID (DELETE)
    localhost/tpRudaApi/api/auth/token (GET AUTORIZACION)

GET ALL:
    Para poder traernos todos los registros de la BBDD utilizamos el metodo GET.
    ej: localhost/tpRudaApi/api/beers/  

GET BY ID:
    Para poder traernos un solo regisro de la BBDD sabiendo el ID utilizamos el metodo GET (localhost/tpRudaApi/api/beers/:ID)
    ej: localhost/tpRudaApi/api/beers/19

POST: (leer autorizacion)
    para insertar un registro en la BBDD necesitamos poner nuestro endpoint con el metodo POST (localhost/tpRudaApi/api/beers/) y debemos completar el siguiente json:
    {
    "fk_id_name": "4", --------->(int11)           
    "type": "cerveza", --------->(varchar 45)
    "container": "Botella", ---->(varchar 45)
    "stock": "12", ------------->(int11)
    "price": "3" --------------->(double)
    }

PUT: (leer autorizacion)
    para editar un registro en la BBDD necesitamos poner nuestro endpoint con el metodo PUT y saber el ID que vamos a editar (localhost/tpRudaApi/api/beers/:ID). 
    
    ej: localhost/tpRudaApi/api/beers/1 y luego debemos completar el siguiente json:
    
    {
    "fk_id_name": "4", --------->(int11)           
    "type": "cerveza editada", --------->(varchar 45)
    "container": "Botella", ---->(varchar 45)
    "stock": "12", ------------->(int11)
    "price": "300" --------------->(double)
    }

DELETE: (leer autorizacion)
    para elimintar un registro en la BBDD debemos conocer el ID, ponemos el endpoint con metodo DELETE (localhost/tpRudaApi/api/beers/:ID) 
    ej: localhost/tpRudaApi/api/beers/19 (delete)
    
AUTORIZACION:
    para poder logearnos en la api debemos poner utilizar el metodo GET y cambiar nuestro endpoint a auth/token (localhost/tpRudaApi/api/auth/token) una vez que hicimos eso, debemos logearnos con nuestro usuario y contraseña para poder recibir un token.
    ese token es el que nos da la autorizacion para poder insertar, editar o eliminar.

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
    Para utilizar la paginacion debemos ingresar dos valroes para nuestras keys "page"(pagina) y "limit" (registros que queremos mostrar)
        Los datos que ingresamos en paginacion son integer para ambos valores.
    Podemos utilizar solo la key PAGE y por defecto tendra un limite de 3 registros    
        - ej: localhost/tpRudaApi/api/beers?page=1
        - ej2: localhost/tpRudaApi/api/beers?page=1&limit=4    

SORT & ORDER
        Para utilizar el SORT & ORDER debemos ingresar dos valroes para nuestras keys "sort" y "order"
        Los datos que ingresamos en 'sort' deben ser de tipo 'string'(columnas de nuestra bbdd) 
        SORT:
            - type
            - container
            - stock
            - price
            - beer_name
        en 'order' deben ser de tipo 'string' en minuscula 'asc' y 'desc'.
        ORDER: 
            - asc
            - desc
        ej: localhost/tpRudaApi/api/beers?sort=id&order=desc (asc/desc)
   
   
    Conclusion filtro/orden/paginacion
    - se puede usar solo filter&data ( en caso de que solo queramos buscar ese dato de esa columna)
    - se puede usar solo sort&order (en caso de q solo queramos cambiar el orden de lo q vemos en base  la columna q decidamos (sort))
    - se puede usar solo page o page&limit (en caso de que queramos paginar lo que ya estmos viendo en el get all
    - se puede combinar como sea siempre y cuando esten los pares juntos.
    (filter&data | sort&order | page&limit)
    ej: localhost/tpRudaApi/api/beers?sort=id&order=desc&page=1&limit=5
    (de esta forma, veremos todo organizado por id descendente con un limite de 5 registros por pagina)


                FIN
