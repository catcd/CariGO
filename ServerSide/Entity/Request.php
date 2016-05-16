<?php
/**
 * 
 */
class Request
{

	private $id;
	private $delivery_id;
	private $customer_id;
	private $from_address;
	private $to_address;
	private $received_time;
	private $description;
	private $status;
	private $vehicle;
	private $contact;
	private $provided_time;
	private $cost;


	//Get Functions
	public function getId()
	{
		return $this->id;
	}

	public function getDelivery_id()
	{
		return $this->delivery_id;
	}

	public function getCustomer_id()
	{
		return $this->customer_id;
	}

	public function getFrom_address()
	{
		return $this->from_address;
	}

	public function getTo_address()
	{
		return $this->to_address;		
	}

	public function getReceive_time()
	{
		return $this->received_time;
	}

	public function getDescription()
	{
		return $this->description;
	}

	public function getStatus()
	{
		return $this->status;
	}

	public function getVehicle()
	{
		return $this->vehicle;
	}

	public function getContact()
	{
		return $this->contact;
	}

	public function getProvided_time()
	{
		return $this->provided_time;
	}

	public function getCost()
	{
		return $this->cost;
	}

	// Set Functions

	public function setId($_id)
	{
		$this->id = $_id;
	}

	public function setDelivery_id($_delivery_id)
	{
		$this->delivery_id = $_delivery_id;
	}

	public function setCustomer_id($_customer_id)
	{
		$this->customer_id = $_customer_id;
	}

	public function setFrom_address($_from_address)
	{
		$this->from_address = $_from_address;
	}

	public function setTo_address($_to_address)
	{
		$this->to_address = $_to_address;		
	}

	public function setReceive_time($_received_time)
	{
		$this->received_time = $_received_time;
	}

	public function setDescription($_description)
	{
		$this->description = $_description;
	}

	public function setStatus($_status)
	{
		$this->status = $_status;
	}

	public function setVehicle($_vehicle)
	{
		$this->vehicle = $_vehicle;
	}

	public function setContact($_contact)
	{
		$this->contact = $_contact;
	}

	public function setProvided_time($_provided_time)
	{
		$this->provided_time = $_provided_time;
	}

	public function setCost($_cost)
	{
		$this->cost = $_cost;
	}
	public function __construct(array $arrRequest)	
	{
		$request = json_encode($arrRequest);

		if (isset($request.id) && $request.id != null) {
			$this->id = $request.id;
		}
		if (isset($request.delivery_id) && $request.delivery_id != null) {
			$this->delivery_id = $request.delivery_id;
		}
		if (isset($request.customer_id) && $request.customer_id != null) {
			$this->customer_id = $request.customer_id;
		}
		if (isset($request.from_address) && $request.from_address != null) {
			$this->from_address = $request.from_address;
		}
		if (isset($request.to_address) && $request.to_address != null) {
			$this->to_address = $request.to_address;
		}
		if (isset($request.received_time) && $request.received_time != null) {
			$this->received_time = $request.received_time;
		}
		if (isset($request.description) && $request.description != null) {
			$this->description = $request.description;
		}
		if (isset($request.status)) {
			$this->status = $request.status;
		}
		if (isset($request.vehicle)) {
			$this->vehicle = $request.vehicle;
		}
		if (isset($request.contact)) {
			$this->contact = $request.contact;
		}
		if (isset($request.provided_time) && $request.provided_time != null) {
			$this->provided_time = $request.provided_time;
		}
		if (isset($request.cost) && $request.cost != null) {
			$this->cost = $request.cost;
		}

	}
}