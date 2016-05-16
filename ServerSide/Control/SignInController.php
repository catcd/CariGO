<?php
    class SignInController
    {
        private $username;
        private $password;
                        
        function __construct()
        {
            $post = json_decode(file_get_contents('php://input'), true);
            $this->username = $post['username'];
            $this->password = $post['password'];
        }

        public function proc()
        {
            if ($this->check($this->username, $this->password)) {
                echo "SUCCESS";
            } else {
                echo "FAILED";
            }
        }

        public static function check($username, $password) {
            try {
                $conn = new PDO("mysql:host=localhost;dbname=carigo", 'carigo', '12345678');
                // set the PDO error mode to exception
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $stmt = $conn->prepare("SELECT id FROM account WHERE username = :username and password = :password");
                $stmt->bindParam(':username', $username);
                $stmt->bindParam(':password', $password);
                $stmt->execute();

                if ($row = $stmt->fetch()) {
                    $conn = null;
                    return $row['id'];
                } else {
                    $conn = null;
                    return false;
                }
            }
            catch(PDOException $e) {
                $conn = null;
                return false;
            }
        }
    }
?>