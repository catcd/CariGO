<?php
class Delivery_manTable {
	public function insert(Delivery_man $newDelivery_man) 
	{
		if(is_int($newDelivery_man.getId()) && is_string($newDelivery_man.getAccount_id()) && is_string($newDelivery_man.getUsername()) 
			&& is_string($newDelivery_man.getEmail()) && is_string($newDelivery_man.getPassword()) && is_int($newDelivery_man.getGender())
			&& is_int($newDelivery_man.getDob()) && is_string($newDelivery_man.getVehicles()))
		{

			$conn = new mysqli_connect("localhost","carigo","12345678","carigo");
            if (!$conn) {
            return false;
            }
			else {

                $sql = "INSERT INTO customer VALUES ('',$newDelivery_man.getAccount_id(), $newDelivery_man.getUsername(),$newDelivery_man.getEmail(),
                	$newDelivery_man.getPassword(),$newDelivery_man.getGender(),$newDelivery_man.getDob(), $newDelivery_man.getVehicles())";
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

	public function update(Delivery_man $delivery_man)
    {
        if(is_int($delivery_man.getId()) && is_int($delivery_man.getAccount_id()) && is_string($delivery_man.getUsername()) 
        	&& is_string($delivery_man.getEmail()) && is_string($delivery_man.getPassword()) && is_int($delivery_man.getGender()) 
        	&& is_int($delivery_man.getDob()) && is_string($delivery_man.getVehicles()))
		{
            $conn = new mysqli_connect("localhost","carigo","12345678","carigo");
            if (!$conn) {
            return false;
            } else {
                return false;
            } else {
                $sql = "UPDATE account SET account_id = $delivery_man.getAccount_id(), username = $delivery_man.getUsername(),email = $delivery_man.getEmail(),password = $delivery_man.getPassword(),gender = $delivery_man.getGender(), dob = $delivery_man.getDob(), vehicles = $delivery_man.getVehicles() WHERE id = $customer.getId()";
        
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
            $sql = "DELETE from delivery_man WHERE id = $_id";
            if (mysqli_query($conn, $sql)) {
                $conn.close();
                return true;
            } else {
                return false;
            }
        }
    }

}