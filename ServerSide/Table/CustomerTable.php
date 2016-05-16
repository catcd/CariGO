<?php
class CustomerTable {
	public function insert(Customer $newCustomer) 
	{
		if(is_int($newCustomer.getAccount_id()) && is_string($newCustomer.getUsername()) && is_string($newCustomer.getEmail()) && is_string($newCustomer.getPassword()) && is_int($newCustomer.getGender()) && is_int($newCustomer.getDob()))
		{
			$conn = new mysqli_connect("localhost","carigo","12345678","carigo");
            if (!$conn) {
            return false;
            }
			else {

                $sql = "INSERT INTO customer VALUES ('',$newCustomer.getAccount_id(), $newCustomer.getUsername(),$newCustomer.getEmail(),$newCustomer.getPassword(),$newCustomer.getGender(),$newCustomer.getDob())";
                if (mysqli_query($conn,$sql)) {
                    $last_id = $conn->insert_id;
                    $conn->close();
                    return true;
                } else {
                    return false;
                }
            }
		}
	}

	public function update(Customer $customer)
    {
        if(is_int($customer.getId()) && is_int($newCustomer.getAccount_id()) && is_string($newCustomer.getUsername()) && is_string($newCustomer.getEmail()) && is_string($newCustomer.getPassword()) && is_int($newCustomer.getGender()) && is_int($newCustomer.getDob()))
		{
            $conn = new mysqli_connect("localhost","carigo","12345678","carigo");
            if (!$conn) {
            return false;
            } else {
                $sql = "UPDATE account SET account_id = $customer.getAccount_id(), username = $customer.getUsername(),email = $customer.getEmail(),password = $customer.getPassword(),gender = $customer.getGender(), dob = $customer.getDob() WHERE id = $customer.getId()";
        
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
            $sql = "DELETE from customer WHERE id = $_id";
            if (mysqli_query($conn, $sql)) {
                $conn.close();
                return true;
            } else {
                return false;
            }
        }
    }

}