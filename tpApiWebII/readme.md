# Beer Ruda Api

_Consumiento esta API podran ver el nombre, tipo, stock, imagen y precio de nuestras diferentes cervezas_

## ENDPOINTS 🚀

* localhost/tpRudaApi/api/beers/ (GET)
* localhost/tpRudaApi/api/beers/ (POST)
* localhost/tpRudaApi/api/beers/:ID (GET ID)
* localhost/tpRudaApi/api/beers/:ID (PUT)
* localhost/tpRudaApi/api/beers/:ID (DELETE)
* localhost/tpRudaApi/api/auth/token (GET AUTORIZACION)

## Servicios GET
### GET ALL (GET)
 _Para poder acceder a todos los registros de la BBDD utilizamos el metod GET._
```
localhost/tpRudaApi/api/beers/  
```
### GET BY ID (GET)
_Para poder acceder a un registro de la BBDD por ID tambien utilizamos el metodo GET._
* localhost/tpRudaApi/api/beers/:ID)
```
localhost/tpRudaApi/api/beers/**19**
```
### SORT & ORDER (GET)
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

### FILTER (GET)
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
### PAGINACIÓN (GET)
_Para utilizar la paginacion debemos ingresar dos valroes para nuestras keys "page"(pagina) y "limit"(registros que queremos mostrar). Podemos utilizar solo la key PAGE y por defecto tendra un limite de 3 registros_   
```
localhost/tpRudaApi/api/beers?page=1
localhost/tpRudaApi/api/beers?page=1&limit=5    
```
### Conclusion filtro/orden/paginacion (GET)
* _Podemos solo utilizar solo filter&data (en caso de que solo queramos buscar ese dato de esa columna)_
* _Podemos solo utilizar solo sort&order (en caso de q solo queramos cambiar el orden de lo q vemos en base a la columna q decidamos -sort-)_
* _Podemos solo utilizar solo page o page&limit (en caso de que queramos paginar lo que ya estmos viendo en el get all)_
* _Podemos combinar estos query params como sea siempre y cuando esten los pares juntos (filter&data | sort&order | page&limit)_
```
localhost/tpRudaApi/api/beers?sort=id&order=desc&page=1&limit=5
**de esta forma, veremos todos los registros organizadoa por id descendente con un limite de 5 registros por pagina**
```
## Servicios POST
### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_Dí cómo será ese paso_

```
Da un ejemplo
```

_Y repite_

```
hasta finalizar
```

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autor ✒️
* Pablo Copes