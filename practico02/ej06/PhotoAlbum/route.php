<?php
function showImages(){
 echo '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>';
    $objects = [
        "flower" => [ "images" => ["flower_0.jpg","flower_1.jpg","flower_2.jpg","flower_3.jpg","flower_4.jpg"], "name" => "Flores"],
        "tree" => [ "images" => ["tree_0.jpg","tree_1.jpg","tree_2.jpg","tree_3.jpg","tree_4.jpg"], "name" => "Arboles"],
        "duck" => [ "images" => ["duck_0.jpg","duck_1.jpg","duck_2.jpg","duck_3.jpg","duck_4.jpg"], "name" => "Patos"]
    ];

    if(isset($_GET['object']) && isset($objects[$_GET['object']]) )
    {
        $selected_object = $objects[$_GET['object']];
        echo "<h1>".$selected_object["name"]."</h1>";
        foreach ($selected_object["images"] as $image )
            echo "<img src='./img/$image'/><br>";
    }
    else
    {
        echo "<p>Seleccione un objecto:</p><br>";
        foreach ($objects as $object => $data )
            echo "<a href='$object'>" . $data["name"] . "</a><br>";
    }

    echo '</body>
          </html>';
  }


?>