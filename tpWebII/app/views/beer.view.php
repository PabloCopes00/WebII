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

    function showEditBeers($beers, $beerDesc){
        $this->smarty->assign('beerDesc', $beerDesc); 
        $this->smarty->assign('beers', $beers);
        $this->smarty->display('showEditBeers.tpl');
    }
    function showFilter($filters, $name, $beerDesc){
        $this->smarty->assign('name', $name); 
        $this->smarty->assign('filters', $filters);
        $this->smarty->assign('beerDesc', $beerDesc);
        $this->smarty->display('filterView.tpl');
    }

    function showDetail($detail, $beerDesc){
        $this->smarty->assign('beerDesc', $beerDesc);
        $this->smarty->assign('detail', $detail);
        $this->smarty->display('showDetail.tpl');
    }

} 