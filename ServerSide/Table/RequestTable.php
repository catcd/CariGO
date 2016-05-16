<?php
class RequestTable {
	public function insert(Request $newRequest) 
	{
		if(is_int($newRequest.getId()) && is_int($newRequest.getDelivery_id()) && is_int($newRequest.getCustomer_id()) && is_string($newRequest.getFrom_address()) && is_string($newRequest.getTo_address()) && checkdate(date("m",$newRequest.getReceived_time()),date("d",$newRequest.getReceived_time()),date("y",$newRequest.getReceived_time())) && is_string($newRequest.getDescription()) && is_int($newRequest.getStatus()) && is_string($newRequest.getVehicle()) && is_string($newRequest.getContact()) && checkdate(date("m",$newRequest.getProvided_time()),date("d",$newRequest.getProvided_time()),date("y",$newRequest.getProvided_time())) && is_float($newRequest.getCost()))
		{
			$conn = new mysqli_connect("localhost","carigo","12345678","carigo");
            if (!$conn) {
            return false;
            }
			else {

                $sql = "INSERT INTO request VALUES ('',$newRequest.getDelivery_id(), $newRequest.getCustomer_id(),$newRequest.getFrom_address(),$newRequest.getTo_address(),$newRequest.getReceived_time(), $newRequest.getDescription(), $newRequest.getStatus(),$newRequest.getVehicle(),$newRequest.getContact(),$newRequest.getProvided_time(),$newRequest.getCost())";
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

	public function update(Request $request)
    {
        if(is_int($request.getId()) && is_int($request.getDelivery_id()) && is_int($request.getCustomer_id()) && is_string($request.getFrom_address()) && is_string($request.getTo_address()) && checkdate(date("m",$request.getReceived_time()),date("d",$request.getReceived_time()),date("y",$request.getReceived_time())) && is_string($request.getDescription()) && is_int($request.getStatus()) && is_string($request.getVehicle()) && is_string($request.getContact()) && checkdate(date("m",$request.getProvided_time()),date("d",$request.getProvided_time()),date("y",$request.getProvided_time())) && is_float($request.getCost()))
        {
            $conn = new mysqli_connect("localhost","carigo","12345678","carigo");
            if (!$conn) {
            return false;
            } else {
                return false;
            } else {
                $sql = "UPDATE account SET delivery_id = $request.getDelivery_id(), customer_id = $request.getCustomer_id(),from_address = $request.getFrom_address(),to_address = $request.getTo_address(),received_time = $request.getReceived_time(), description = $request.getDescription(),status = $request.getStatus(),vehicle= $request.getVehicle(),contact = $request.getContact(),provided_time = $request.getProvided_time(),cost = $request.getCost() WHERE id = $customer.getId()";
        
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
            $sql = "DELETE from request WHERE id = $_id";
            if (mysqli_query($conn, $sql)) {
                $conn.close();
                return true;
            } else {
                return false;
            }
        }
    }

}