<?php
require_once './libs/smarty/libs/Smarty.class.php';

class BeerDescView {
    private $smarty;

    public function __construct() {
        $this->smarty = new Smarty(); // inicializo Smarty
    }
    function showBeerDesc($beerDesc) {
        $this->smarty->assign('beerDesc', $beerDesc);
        $this->smarty->display('beerDescView.tpl');
    }
    function showEditBeerDesc($beerDesc){
        $this->smarty->assign('beerDesc', $beerDesc); 
        $this->smarty->display('showEditBeerDesc.tpl');
    }
} 


