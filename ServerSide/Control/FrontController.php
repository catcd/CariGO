<?php
    /**
    * FrontController
    * FrontController is used for rerouting
    */
    class FrontController
    {
        private $requestURI;
        private $scriptName;
        private $requestURIs;
        private $scriptNames;
                        
        function __construct()
        {
            $this->requestURI = $_SERVER['REQUEST_URI'];
            $this->scriptName = $_SERVER['SCRIPT_NAME'];
            $this->requestURIs = explode('/', $_SERVER['REQUEST_URI']);
            $this->scriptNames = explode('/', $_SERVER['SCRIPT_NAME']);
        }

        public function proc()
        {
            if($this->requestURIs[1] == 'signin') {
                require_once 'Control/SignInController.php';
                $siController = new SignInController();
                $siController->proc(); 
            } else {
                echo "FAILED";
            }
        }
    }
?>