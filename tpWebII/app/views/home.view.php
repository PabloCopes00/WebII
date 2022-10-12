<?php
require_once './libs/smarty/libs/Smarty.class.php';

class HomeView {
    private $smarty;

    public function __construct() {
        $this->smarty = new Smarty(); // inicializo Smarty
    }
    function showHome($beers, $beerDesc) {
        $this->smarty->assign('beers', $beers);
        $this->smarty->assign('beerDesc', $beerDesc); 
        $this->smarty->display('homeView.tpl');
    }
    function showFilter($filters, $beerDesc){
        $this->smarty->assign('beerDesc', $beerDesc); 
        $this->smarty->assign('filters', $filters);
        $this->smarty->display('filterView.tpl');
    }
} 