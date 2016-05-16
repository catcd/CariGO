<?php
/**
*  
*/
class AccountTable
{
	
	public function insert(Account $newAccount)
	{
		if(is_string($newAccount.getUsername()) && is_string($newAccount.getEmail()) && is_string($newAccount.getPassword()) && is_int($newAccount.getActivate()))
		{
			$conn = new mysqli_connect("localhost","carigo","12345678","carigo");
            if (!$conn) {
            return false;
            }
            else {

                $sql = "INSERT INTO account VALUES ('',$newAccount.getUsername(),$newAccount.getEmail(),$newAccount.getPassword(),$newAccount.getActivate())";
                if (mysqli_query($conn,$sql)) {
                    $last_id = $conn->insert_id;
                    $conn->close();
                    return $last_id;
                } else {
                    return false;
                }
            }
		}
	}

    public function update(Account $account)
    {
        if (is_int($account.getId()) && is_string($account.getUsername()) && is_string($account.getEmail()) && is_string($account.getPassword()) && is_int($account.getActivate())) {
            $conn = new mysqli_connect("localhost","carigo","12345678","carigo");
            if (!$conn) {
            return false;            
            } else {
                $sql = "UPDATE account SET username = $account.getUsername(),email = $account.getEmail(),password = $account.getPassword(),activate = $account.getActivate() WHERE id = $account.getId()";
        
                if (mysqli_query($conn,$sql)) {            
                    $conn->close();
                    return true;
                } else {
                    return false;
                }
            }

        }
    }

    public function remove($_id)
    {
        $conn = new mysqli_connect("localhost","carigo","12345678","carigo");
        if (!$conn) {
            return false;
        } else {
            $sql = "DELETE from account WHERE id = $_id";
            if (mysqli_query($conn, $sql)) {
                $conn.close();
                return true;
            } else {
                return false;
            }
        }
    }
}