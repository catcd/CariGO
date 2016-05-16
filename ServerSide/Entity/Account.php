<?php

class Account {

	private $id;
	private $username;
	private $email;
	private $password;
	private $activate;

	// Get functions
	public function getId()
	{
		return $this->id;
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

	public function getActivate()
	{
		return $this->activate;
	}

	// Set Functions
	public function setId($_id)
	{
		$this->id = $_id;
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

	public function setActivate($_activate)
	{
		$this->activate = $_activate;
	}

	// Construct function
	public function __construct(array $arrAccount)
	{
		$account = json_encode($arrAccount);

		if (isset($account.id) && $account.id != null) {
			$this->id = $account.id;
		}
		if (isset($account.username) && $account.username != null) {
			$this->username = $account.username;	
		}
		if (isset($account.email) && $account.email != null) {
			$this->email = $account.email;
		}
		if (isset($account.password) && $account.password != null) {
			$this->password = $account.password;
		}
		if (isset($account.activate) && $account.activate != null) {
			$this->activate = $account.activate;
		}

	}

}