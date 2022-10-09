<?php

class BeerDescModel {

    private $db;

    public function __construct() {
        $this->db = new PDO('mysql:host=localhost;'.'dbname=db_tpeweb;charset=utf8', 'root', 'root');
        
    }
    public function getAllBeerDesc() {
   
        $query = $this->db->prepare("SELECT * FROM beerNameDesc");
        $query->execute();

        $beerDesc = $query->fetchAll(PDO::FETCH_OBJ); // devuelve un arreglo de objeto
        return $beerDesc;
    }
    function insertBeer($beer_name, $abv, $ibu, $description, $img) { 
        $query = $this->db->prepare("INSERT INTO beerNameDesc (beer_name, abv, ibu, description, img) VALUES (?, ?, ?, ?,?)");
         $query->execute([$beer_name, $abv, $ibu, $description, $img]);
         
         return $this->db->lastInsertId();
         header("Location: " . BASE_URL. 'beerDesc');
     }
     function deleteBeerById($id) {
        $query = $this->db->prepare('DELETE FROM beerNameDesc WHERE id_name_fk = ?');
        $query->execute([$id]);
        header("Location: " . BASE_URL. 'beerDesc');
    }

}
