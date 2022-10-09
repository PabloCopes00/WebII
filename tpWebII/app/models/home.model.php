<?php

class HomeModel {

    private $db;

    public function __construct() {
        $this->db = new PDO('mysql:host=localhost;'.'dbname=db_tpeweb;charset=utf8', 'root', 'root');
    }
    public function getAllBeersHome() {
        $query = $this->db->prepare("SELECT beerSale.id, beerSale.fk_id_name, beerSale.type, beerSale.container,beerSale.stock,beerSale.price, beerNameDesc.beer_name, beerNameDesc.abv, beerNameDesc.ibu, beerNameDesc.img FROM beerSale INNER JOIN beerNameDesc ON beerSale.fk_id_name = beerNameDesc.id_name_fk");
        $query->execute();

        
        $beers = $query->fetchAll(PDO::FETCH_OBJ);
        return $beers;
    }
}    
    // var_dump($query->errorInfo());