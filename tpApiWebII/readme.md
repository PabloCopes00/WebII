# Beer Ruda Api

_Consumiendo esta API podran ver el nombre, tipo, stock, imagen y precio de nuestras diferentes cervezas_

## ENDPOINTS 🚀

* localhost/tpRudaApi/api/beers/ (GET)
* localhost/tpRudaApi/api/beers/ (POST)
* localhost/tpRudaApi/api/beers/:ID (GET ID)
* localhost/tpRudaApi/api/beers/:ID (PUT)
* localhost/tpRudaApi/api/beers/:ID (DELETE)
* localhost/tpRudaApi/api/auth/token (GET AUTORIZACION)

## Servicios GET
### GET ALL
 _Para poder acceder a todos los registros de la BBDD utilizamos el metod GET._
```
localhost/tpRudaApi/api/beers/  
```
### GET BY ID
_Para poder acceder a un registro de la BBDD por ID tambien utilizamos el metodo GET._
* localhost/tpRudaApi/api/beers/:ID)
```
localhost/tpRudaApi/api/beers/**19**
```
### SORT & ORDER
_utilizando los query params SORT & ORDER podemos establecer un orden ascendente 'asc' o descentendete 'desc' a una clasificacion ingresada en 'sort'_
SORT:
* type (varchar 45)
* container (varchar 45)
* stock (int11)
* price (int11)
* beer_name (varchar 45)
ORDER:
* asc
* desc
```
localhost/tpRudaApi/api/beers?sort=id&order=asc
localhost/tpRudaApi/api/beers?sort=id&order=desc
```

### FILTER
_utilizando los query params FIELD & DATA podemos establecer el valor de una celda para poder filtrar. field(columna) y data(valor de la celda)_ - ej: field=type data=Rubia
       
* type (varchar 45) 
```
localhost/tpRudaApi/api/beers?field=type&data=Rubia
```
* container (varchar 45)
```
localhost/tpRudaApi/api/beers?field=container&data=Lata
```
* stock (int11) 
```
localhost/tpRudaApi/api/beers?field=stock&data=40
```
* price (int11) 
```
localhost/tpRudaApi/api/beers?field=price&data=550
```
* beer_name (varchar 45) 
```
localhost/tpRudaApi/api/beers?field=beer_name&data=New+England+Ipa
```
### PAGINACIÓN
_Para utilizar la paginacion debemos ingresar dos valroes para nuestras keys "page"(pagina) y "limit"(registros que queremos mostrar). Podemos utilizar solo la key PAGE y por defecto tendra un limite de 3 registros_   
```
localhost/tpRudaApi/api/beers?page=1
localhost/tpRudaApi/api/beers?page=1&limit=5    
```
### Conclusion filtro/orden/paginacion
* _Podemos utilizar solo filter&data (en caso de que solo queramos buscar ese dato de esa columna)_
* _Podemos utilizar solo sort&order (en caso de q solo queramos cambiar el orden de lo q vemos en base a la columna q decidamos -sort-)_
* _Podemos utilizar solo page o page&limit (en caso de que queramos paginar lo que ya estmos viendo en el get all)_
* _Podemos combinar estos query params como sea siempre y cuando esten los pares juntos salvo page que puede ir solo (filter&data | sort&order | page&limit)_
```
localhost/tpRudaApi/api/beers?sort=id&order=desc&page=1&limit=5
(de esta forma, veremos todos los registros organizadoa por id descendente con un limite de 5 registros por pagina)
```
## Servicio POST (leer autorizacion)
_Para insertar un registro en la BBDD necesitamos poner nuestro endpoint con el metodo POST (localhost/tpRudaApi/api/beers/)_
``` 
{
"fk_id_name": "4", --------->(int11)           
"type": "cerveza", --------->(varchar 45)
"container": "Botella", ---->(varchar 45)
"stock": "12", ------------->(int11)
"price": "3" --------------->(double)
}
```
## Servicio PUT (leer autorizacion)
_Para editar un registro en la BBDD necesitamos poner nuestro endpoint con el metodo PUT y saber el ID que vamos a editar (localhost/tpRudaApi/api/beers/:ID)_
  ```
localhost/tpRudaApi/api/beers/1
  ```  
_y luego debemos completar el siguiente json:_
```   
{
"fk_id_name": "4", --------->(int11)           
"type": "cerveza editada", --------->(varchar 45)
"container": "Botella", ---->(varchar 45)
"stock": "12", ------------->(int11)
"price": "300" --------------->(double)
}
```
## Servicio DELETE (leer autorizacion)
_para elimintar un registro en la BBDD debemos conocer el ID, utilizamos el endpoint con metodo DELETE (localhost/tpRudaApi/api/beers/:ID)_
```
localhost/tpRudaApi/api/beers/19 (delete)
```
# AUTORIZACION:
_para poder identificarnos en la api debemos utilizar el metodo GET y cambiar nuestro endpoint a:_
* auth/token 
(localhosttpRudaApi/api/auth/token) 
_Luego con nuestro usuario y contraseña (Basic Auth postman) accedemos para poder recibir un token._
_Este token es el que nos da la autorizacion para poder insertar,editar o eliminar (Bearer Token)._
