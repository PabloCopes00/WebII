<?php
require_once './libs/smarty/libs/Smarty.class.php';

class BeerView {
    private $smarty;

    public function __construct() {
        $this->smarty = new Smarty();
    }
    function showBeers($beers, $beerDesc) {
        $this->smarty->assign('beerDesc', $beerDesc); 
        $this->smarty->assign('beers', $beers);
        $this->smarty->display('beerView.tpl');
    }
} 