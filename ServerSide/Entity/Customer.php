<?php
class Customer {

	private $id;
	private $account_id;
	private $username;
	private $email;
	private $password;
	private $gender;
	private $dob;

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

	public function __construct(array $arrCustomer)
	{
		$customer = json_encode($arrCustomer);

		if (isset($customer.id) && $customer.id != null) {
			$this->id = $customer.id;
		}

		if (isset($customer.account_id) && $customer.account_id != null) {
			$this->account_id = $customer.account_id;
		}

		if (isset($customer.username) && $customer.username != null) {
			$this->username = $customer.username;
		}

		if (isset($customer.email) && $customer.email != null) {
			$this->email = $customer.email;
		}

		if (isset($customer.password) && $customer.password != null) {
			$this->password = $customer.password;
		}

		if (isset($customer.gender)) {
			$this->gender = $customer.gender;
		}

		if (isset($customer.dob)) {
			$this->dob = $customer.dob;
		}
	}

}