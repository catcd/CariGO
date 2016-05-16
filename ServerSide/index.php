<?php
	header('Access-Control-Allow-Origin: *');
    require_once 'Control/FrontController.php';

    $fController = new FrontController();
    $fController->proc();
