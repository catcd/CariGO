<?php
class Delivery_man
{
	private $id;
	private $account_id;
	private $username;
	private $email;
	private $password;
	private $gender;
	private $dob;
	private $vehicles;

	// Get Functions
	public function getId()
	{
		return $this->id;
	}

	public function getAccount_id()
	{
		return $this->account_id;
	}

	public function getUsername()
	{
		return $this->username;
	}

	public function getEmail()
	{
		return $this->email;
	}

	public function getPassword()
	{
		return $this->password;
	}

	public function getGender()
	{
		return $this->gender;
	}

	public function getDob()
	{
		return $this->dob;
	}

	public function getVehicles()
	{
		return $this->vehicles;
	}

	// Set Functions
	public function setId($_id)
	{
		$this->id = $_id;
	}

	public function setAccount_id($_account_id)
	{
		$this->account_id = $_account_id;
	}

	public function setUsername($_username)
	{
		$this->username = $_username;
	}

	public function setEmail($_email)
	{
		$this->email = $_email;
	}

	public function setPassword($_password)
	{
		$this->password = $_password;
	}

	public function setGender($_gender)
	{
		$this->gender = $_gender;
	}

	public function setDob($_dob)
	{
		$this->dob = $_dob;
	}

	public function setVehicles($_vehilces)
	{
		$this->vehicles = $_vehilces;
	}

	public function __construct(array $arrDelivery_man)
	{
		$delivery_man = json_encode($arrDelivery_man);

		if (isset($delivery_man.id) && $delivery_man.id != null) {
			$this->id = $delivery_man.id;
		}

		if (isset($delivery_man.account_id) && $delivery_man.account_id != null) {
			$this->account_id = $delivery_man.account_id;
		}

		if (isset($delivery_man.username) && $delivery_man.username != null) {
			$this->username = $delivery_man.username;
		}

		if (isset($delivery_man.email) && $delivery_man.email != null) {
			$this->email = $delivery_man.email;
		}

		if (isset($delivery_man.password) && $delivery_man.password != null) {
			$this->password = $delivery_man.password;
		}

		if (isset($delivery_man.gender)) {
			$this->gender = $delivery_man.gender;
		}

		if (isset($delivery_man.dob)) {
			$this->dob = $delivery_man.dob;
		}

		if (isset($delivery_man.vehicles)) {
			$this->vehicles = $delivery_man.vehicles;
		}

	}
}