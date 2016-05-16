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
            } elseif ($this->requestURIs[1] == 'get-my-request') {
                require_once 'Control/DeliveryServiceController.php';
                $dsController = new DeliveryServiceController();
                $dsController->getMyRequest();
            } elseif ($this->requestURIs[1] == 'delete-request') {
                require_once 'Control/DeliveryServiceController.php';
                $dsController = new DeliveryServiceController();
                $dsController->deleteRequest($this->requestURIs[2]);
            } elseif ($this->requestURIs[1] == 'book-delivery-service') {
                require_once 'Control/DeliveryServiceController.php';
                $dsController = new DeliveryServiceController();
                $dsController->createRequest();
            } elseif ($this->requestURIs[1] == 'change-request-detail') {
                require_once 'Control/DeliveryServiceController.php';
                $dsController = new DeliveryServiceController();
                $dsController->updateRequest();
            } else {
                echo "FAILED";
            }
        }
    }
?>