<?php

class BeerModel {

    private $db;

    public function __construct() {
        $this->db = new PDO('mysql:host=localhost;'.'dbname=db_tpeweb;charset=utf8', 'root', 'root');
        
    }
    public function getAllBeers() {
        $query = $this->db->prepare("SELECT * FROM beerSale");
        $query->execute();
        $beers = $query->fetchAll(PDO::FETCH_OBJ);
        return $beers;
    }
    public function getRegisterById($id){
        $query = $this->db->prepare("SELECT * FROM beerSale where `id`=$id");
        $query->execute();
        $beerRegister = $query->fetchAll(PDO::FETCH_OBJ);
        return $beerRegister;
    }

    public function insertBeer($type, $container, $stock, $price, $beerOption) {
        $query = $this->db->prepare("INSERT INTO beerSale (type, container, stock, price, fk_id_name) VALUES (?, ?, ?, ?, ?)");
        $query->execute([$type, $container, $stock, $price, $beerOption]);
         
         return $this->db->lastInsertId();
         header("Location: " . BASE_URL. 'showBeers');
     }

     //aca estamos y tenemos que ver como hacer el update con esos datos que tenemos.
     //saludos mis amigos de youtube.jajajajajaja
    public function insertEditBeer($type, $container, $stock, $price, $beerOption, $id){
        
            $query = $this->db->prepare("UPDATE `beerSale` SET type=?, container=?, stock=?, price=?, fk_id_name=? WHERE id=?");
            $query->execute([$type, $container, $stock, $price, $beerOption, $id]);
            header("Location: " . BASE_URL. 'showBeers');
    }

    function deleteBeerById($id) {
        $query = $this->db->prepare('DELETE FROM beerSale WHERE id = ?');
         $query->execute([$id]);
         header("Location: " . BASE_URL. 'showBeers');
     }

}

