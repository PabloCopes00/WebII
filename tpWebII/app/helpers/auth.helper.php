<?php

class AuthHelper {
    public function checkLoggedIn() {
        if (session_status() != PHP_SESSION_ACTIVE) {
            session_start();
        }  
        
        if (!isset($_SESSION['IS_LOGGED'])) {
            header("Location: " . BASE_URL . 'login');
            die();
        }
    } 
}