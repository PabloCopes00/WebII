<?php
require_once './libs/smarty/libs/Smarty.class.php';

class HomeView {
    private $smarty;

    public function __construct() {
        $this->smarty = new Smarty(); // inicializo Smarty
    }
    function showHome($beers) {
        $this->smarty->assign('beers', $beers);
        $this->smarty->display('homeView.tpl');
    }
} 