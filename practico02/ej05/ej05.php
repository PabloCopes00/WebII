<?php
function showTable($id){
include 'templates/header.php';
// Imprimir la siguiente tabla de multiplicar generada automáticamente en PHP. Modifique el ejercicio para que el límite
//de la tabla sea ingresado por un usuario.
   echo '<table>';
      for ($t=0; $t <= $id; $t++) { 
        if($t==0){ 
          echo "<th></th>" ; 
        } else { 
            echo "<th class='amarillo'>$t</th>" ;
         } 
      } 
      for ($i=1; $i <=$id; $i++) {
         echo "<tr>" ; echo "<td class='amarillo'> $i </td>" ; 
          for ($j=1; $j <=$id ; $j++) {
               if($i==$j){ echo "<td class='amarillo'>" .$i*$j."</td>";
               }else{
                        echo "<td>".$i*$j."</td>";
                }
          }
        }
    echo "</tr>";
    echo "</table>";
    include 'templates/footer.php';
}