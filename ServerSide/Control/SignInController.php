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
            try {
                $conn = new PDO("mysql:host=localhost;dbname=carigo", 'carigo', '12345678');
                // set the PDO error mode to exception
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $stmt = $conn->prepare("SELECT id FROM account WHERE username = :username and password = :password");
                $stmt->bindParam(':username', $this->username);
                $stmt->bindParam(':password', $this->password);
                $stmt->execute();

                if ($row = $stmt->fetch()) {
                    session_start();
                    $_SESSION['carigoId'] = $row['id'];
                    echo "SUCCESS";
                } else {
                    echo "FAILED";
                }
            }
            catch(PDOException $e) {
                echo "Connection failed: " . $e->getMessage();
            }
            $conn = null;
        }
    }
?>