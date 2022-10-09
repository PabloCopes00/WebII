<?php
/** 
 * Arhivo PHP puro que simula una base de datos.
 * 
 * Cualquier archivo que lo incluye puede acceder a los datos harcodeados.
*/

/**
 * Obtiene el arreglo de noticias
 */
function getNoticias() {
    $n1 = new stdClass();
    $n1->title = "La NASA denunció que China planea poner un supermercado en la luna.";
    $n1->img = "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/crs7-postlaunch1.jpg";
    $n1->text = "Según la agencia espacial norteamericana, en las últimas semanas se interceptaron 3 cohetes chinos con mercadería y un cuarto, tripulado por personas de origen peruano entrenados para hacer reabastesimiento de mercadería en gravedad 0.";

    $n2 = new stdClass();
    $n2->title = "Crean software para detectar gente pelotudeando en el trabajo.";
    $n2->img = "https://1.bp.blogspot.com/-f1w3f4ePS3s/W1jVAAlT6RI/AAAAAAAAGuE/jAD5isAy2Ws5MNlrbViteOkzs3TTAr5nACLcBGAs/s640/SW_DRONE.jpg";
    $n2->text = "El Software, promete disparar la productividad de empresas y comercios, al eliminar tiempos muertos de empleados asignandoles diferentes roles. Varios sindicatos ya se declararon en contra del uso de esta tecnología.";

    $n3 = new stdClass();
    $n3->title = "Quien es Tito Musk, el primo argentino de Elon Musk que se presentó en lo de Guido Kaczka.";
    $n3->img = "https://files.merca20.com/uploads/2022/05/Elon-Musk-tatuaje-e1651875137289.jpeg";
    $n3->text = "Tito Musk vive en Bernal y desde chico se destacó por inventar pelotudeces. En 1986 intentó mandar un conejo a la Luna pero revento como el Challenger. También dice que habla seguido con su primo, Elon.";

    $n4 = new stdClass();
    $n4->title = "Starbucks se va del país y hay preocupación entre hipsters: -'no sabemos donde iremos a mostrar que tenemos una macbook.'-";
    $n4->img = "https://1.bp.blogspot.com/-HiD_vBlSbg0/X2PjR8udR5I/AAAAAAAAIvw/E3EWAortz7A3ZHIdTrOGHa7YGsf17ZUiQCLcBGAsYHQ/w640-h444/starbucks.jpg";
    $n4->text = "Según el comunicado oficial 'debido a la crisis global que vive el sector, y la cantidad de pelotudos que ocupan mesas durante 8 horas con un café y dos mediaslunas solamente para darse corte que tienen una MacBook, se hace inviables la continidad de las operaciones en Argentina.'";

    $noticias = [$n1, $n2, $n3, $n4];
    return $noticias;
}

/**
 * Obtiene el arreglo de desarroladores
 */
function getDevelopers() {
    $d1 = new stdClass();
    $d1->id = "franco";
    $d1->name = "Franco Stramana";
    $d1->email = "franco.stramana@diariotudai.com";
    $d1->role = "Full Stack Developer";
    
    $d2 = new stdClass();
    $d2->id = "nico";
    $d2->name = "Nico Dazeo";
    $d2->email = "nico.dazeo@diariotudai.com";
    $d2->role = "Backend Developer";
    
    $d3 = new stdClass();
    $d3->id = "belen";
    $d3->name = "Belén Enemark";
    $d3->email = "belen.enemark@diariotudai.com";
    $d3->role = "Frontend Developer";
    
    $developers = [$d1, $d2, $d3];
    return $developers;
}

/**
 * Devuelve un developer dado su ID
 */
function getDeveloperById($id) {
    $developers = getDevelopers();

    foreach ($developers as $developer) {
        if ($id == $developer->id) return $developer;
    }

    return null;
}

