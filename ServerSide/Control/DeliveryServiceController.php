<?php
    class DeliveryServiceController
    {
        private $username;
        private $password;
                        
        function __construct()
        {
            $post = json_decode(file_get_contents('php://input'), true);
            $this->username = $post['username'];
            $this->password = $post['password'];
            if (isset($post['request-id'])) {
                $this->requestId = $post['request-id'];
            }
            if (isset($post['request'])) {
                $this->request = json_decode($post['request'], true);
            }
        }

        public function getMyRequest()
        {
            require_once 'Control/SignInController.php';
            $check = SignInController::check($this->username, $this->password);
            if ($check != false) {
                $customerId = $check;
                try {
                    $conn = new PDO("mysql:host=localhost;dbname=carigo", 'carigo', '12345678');
                    // set the PDO error mode to exception
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    $stmt = $conn->prepare("SELECT * FROM request WHERE customer_id = :customer_id");
                    $stmt->bindParam(':customer_id', $customerId);
                    $stmt->execute();

                    $result = array();
                    while ($row = $stmt->fetch()) {
                        $result[] = $row;
                    }

                    echo json_encode($result);
                }
                catch(PDOException $e) {
                    echo "Connection failed: " . $e->getMessage();
                }
                $conn = null;
            } else {
                echo "FAILED";
            }
        }

        public function deleteRequest($requestId)
        {
            require_once 'Control/SignInController.php';
            $check = SignInController::check($this->username, $this->password);
            if ($check != false) {
                $customerId = $check;
                try {
                    $conn = new PDO("mysql:host=localhost;dbname=carigo", 'carigo', '12345678');
                    // set the PDO error mode to exception
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    $stmt = $conn->prepare("DELETE FROM request WHERE customer_id = :customer_id and id = :id");
                    $stmt->bindParam(':customer_id', $customerId);
                    $stmt->bindParam(':id', $requestId);
                    $stmt->execute();

                    echo "SUCCESS";
                }
                catch(PDOException $e) {
                    echo "Connection failed: " . $e->getMessage();
                }
                $conn = null;
            } else {
                echo "FAILED";
            }
        }

        public function createRequest()
        {
            require_once 'Control/SignInController.php';
            $check = SignInController::check($this->username, $this->password);
            if ($check != false) {
                $customerId = $check;
                try {
                    $conn = new PDO("mysql:host=localhost;dbname=carigo", 'carigo', '12345678');
                    // set the PDO error mode to exception
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    $stmt = $conn->prepare("INSERT INTO request (customer_id, from_address, to_address, received_time, description) VALUES (:customer_id, :from_address, :to_address, :received_time, :description)");

                    $stmt->bindParam(':customer_id', $customerId);
                    $stmt->bindParam(':from_address', $this->from_address);
                    $stmt->bindParam(':to_address', $this->to_address);
                    $stmt->bindParam(':received_time', $this->received_time);
                    $stmt->bindParam(':description', $this->description);
                    $stmt->execute();

                    echo "SUCCESS";
                }
                catch(PDOException $e) {
                    echo "Connection failed: " . $e->getMessage();
                }
                $conn = null;
            } else {
                echo "FAILED";
            }
        }

        public function updateRequest()
        {
            require_once 'Control/SignInController.php';
            $check = SignInController::check($this->username, $this->password);
            if ($check != false) {
                $customerId = $check;
                try {
                    $conn = new PDO("mysql:host=localhost;dbname=carigo", 'carigo', '12345678');
                    // set the PDO error mode to exception
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    $stmt = $conn->prepare("UPDATE request SET  from_address =  :from_address, to_address = :to_address, received_time = :received_time, description = :description WHERE  id = :id and customer_id = :customer_id");

                    $stmt->bindParam(':from_address', $this->from_address);
                    $stmt->bindParam(':to_address', $this->to_address);
                    $stmt->bindParam(':received_time', $this->received_time);
                    $stmt->bindParam(':description', $this->description);
                    $stmt->bindParam(':id', $this->requestId);
                    $stmt->bindParam(':customer_id', $customerId);
                    $stmt->execute();

                    echo "SUCCESS";
                }
                catch(PDOException $e) {
                    echo "Connection failed: " . $e->getMessage();
                }
                $conn = null;
            } else {
                echo "FAILED";
            }
        }
    }
?>