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
    public function getRegisterDescById($id){
        $query = $this->db->prepare("SELECT * FROM beerNameDesc");
        $query->execute();
        $beerDescRegister = $query->fetchAll(PDO::FETCH_OBJ);
        return $beerDescRegister;
    }
    public function getRegisterDescById2($id){
        $query = $this->db->prepare("SELECT * FROM beerNameDesc where `id_name_fk`=$id");
        $query->execute();
        $beerRegister = $query->fetchAll(PDO::FETCH_OBJ);
        return $beerRegister;
    }
    
    function insertBeer($beer_name, $abv, $ibu, $description, $img) { 
        $query = $this->db->prepare("INSERT INTO beerNameDesc (beer_name, abv, ibu, description, img) VALUES (?, ?, ?, ?,?)");
         $query->execute([$beer_name, $abv, $ibu, $description, $img]);
         
         return $this->db->lastInsertId();
         header("Location: " . BASE_URL. 'beerDesc');
     }
     public function insertEditBeerDesc($beer_name, $abv, $ibu, $description, $img, $id){
        
        $query = $this->db->prepare("UPDATE `beerNameDesc` SET beer_name=?, abv=?, ibu=?, description=?, img=? WHERE id_name_fk=?");
        $query->execute([$beer_name, $abv, $ibu, $description, $img, $id]);
        header("Location: " . BASE_URL. 'beerDesc');
}

     function deleteBeerById($id) {
        $query = $this->db->prepare('DELETE FROM beerNameDesc WHERE id_name_fk = ?');
        $query->execute([$id]);
        header("Location: " . BASE_URL. 'beerDesc');
    }

}
