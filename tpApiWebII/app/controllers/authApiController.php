<?php
require_once './app/models/beerApiModel.php';
require_once './app/models/userApiModel.php';
require_once './app/views/beerApiView.php';
require_once './app/helpers/authApiHelper.php';
class AuthApiController {
    private $model;
    private $view;
    private $authHelper;
    private $data;

    public function __construct() {
        $this->model = new UserApiModel();
        $this->view = new beerApiView();
        $this->authHelper = new AuthApiHelper();
        
        // lee el body del request
        $this->data = file_get_contents("php://input");
    }
    
    /*function base64url_encode($data) {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }*/

    public function getToken($params = null) {
        // traigo $basic base64(user:passwd)
        $basic = $this->authHelper->getAuthHeader();
        
        if(empty($basic)){
            $this->view->response('No autorizado', 401);
            return;
        }
        $basic = explode(" ", $basic); 
        if($basic[0]!="Basic"){
            $this->view->response('La autenticación debe ser Basic', 401);
            return;
        }

        //validar usuario:contraseña
        $userpasswd = base64_decode($basic[1]); // user:pass
        $userpasswd = explode(":", $userpasswd);
        $user = $userpasswd[0];
        $passwd = $userpasswd[1];
        $userDB =$this->model->getUserByEmail($user);
        if($userDB && password_verify($passwd, $userDB->password)){
            //  crear un token
            $header = array(
                'alg' => 'HS256',
                'typ' => 'JWT'
            );
            $payload = array(
                'id' => $userDB->id_user,
                'name' => $userDB->email,
                'exp' => time()+60
            );
            $header = $this->authHelper->base64url_encode(json_encode($header));
            $payload = $this->authHelper->base64url_encode(json_encode($payload));
            $signature = hash_hmac('SHA256', "$header.$payload", "Clave1234", true);
            $signature = $this->authHelper->base64url_encode($signature);
            $token = "$header.$payload.$signature";
            $this->view->response($token);
        }else{
            $this->view->response('No autorizado', 401);
        }
    }

}