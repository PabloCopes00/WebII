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
    public function getNameById($id){
        $query = $this->db->prepare("SELECT `beer_name`FROM `beerNameDesc` WHERE `id_name_fk`= ?");
        $query->execute([$id]);
        $name = $query->fetch(PDO::FETCH_OBJ);
        return $name;
    }

    public function getRegisterDescById($id){
        $query = $this->db->prepare("SELECT * FROM beerNameDesc where `id_name_fk`=?");
        $query->execute([$id]);
        $beerRegister = $query->fetchAll(PDO::FETCH_OBJ);
        return $beerRegister;
    }
    
    function insertBeer($beer_name, $abv, $ibu, $description, $imagen = null) { 
        $pathImg = null;
        if ($imagen){
        $pathImg = $this->uploadImage($imagen);
        }
        $query = $this->db->prepare("INSERT INTO beerNameDesc (beer_name, abv, ibu, description, img) VALUES (?, ?, ?, ?, ?)");
        $query->execute([$beer_name, $abv, $ibu, $description, $pathImg]);
         return $this->db->lastInsertId();
     }

     private function uploadImage($image){
        $target = 'images/' . uniqid() . '.jpg';
        move_uploaded_file($image, $target);
        return $target;
    }

    public function insertEditBeerDesc($beer_name, $abv, $ibu, $description, $id){
        
        $query = $this->db->prepare("UPDATE `beerNameDesc` SET beer_name=?, abv=?, ibu=?, description=? WHERE id_name_fk=?");
        $query->execute([$beer_name, $abv, $ibu, $description, $id]);
    }

     function deleteBeerById($id) {
        $query = $this->db->prepare('DELETE FROM beerNameDesc WHERE id_name_fk = ?');
        $query->execute([$id]);
        header("Location: " . BASE_URL. 'beerDesc');
    }

}
