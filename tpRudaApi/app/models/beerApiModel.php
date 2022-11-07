<?php

class BeerApiModel {

    private $db;

    public function __construct() {
        $this->db = new PDO('mysql:host=localhost;'.'dbname=db_tpeweb;charset=utf8', 'root', 'root');
        
    }
    public function get($id) { 
        //si hay ID muestro la cerveza, sino mando todas.
        if ($id != null){
            $query = $this->db->prepare("SELECT * FROM beerSale where `id`=?");
            $query->execute([$id]);
            $beer = $query->fetch(PDO::FETCH_OBJ);
            return $beer;
        }
        else{
            $query = $this->db->prepare("SELECT * FROM beerSale");
            $query->execute();
            $beers = $query->fetchAll(PDO::FETCH_OBJ);
            return $beers;
        }
    }
    
    function save($beerOption, $type, $container, $stock, $price) { 
        $query = $this->db->prepare("INSERT INTO beerSale (fk_id_name, type, container, stock, price) VALUES (?, ?, ?, ?, ?)");
        $query->execute([$beerOption, $type, $container, $stock, $price]);
        return $this->db->lastInsertId();
     }
    
    function delete($id) {
        $query = $this->db->prepare('DELETE FROM beerSale WHERE id = ?');
        $query->execute([$id]);
    }
     
     public function update($id, $beerOption, $type, $container, $stock, $price){
        
             $query = $this->db->prepare("UPDATE `beerSale` SET type=?, container=?, stock=?, price=?, fk_id_name=? WHERE id=?");
             $query->execute([$type, $container, $stock, $price, $beerOption, $id]);            
    }

    public function order($order, $sort){
        $query = $this->db->prepare("SELECT * FROM `beerSale` ORDER BY `$sort` $order");
        $query->execute();
        $ordered = $query->fetchAll(PDO::FETCH_OBJ);
        return $ordered;
    }
}


