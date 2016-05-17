/**
 * starter: Can Duy Cat
 * owner: Ngo Duc Dung
 * last update: 16/05/2016
 * type: class DeliveryServiceForm
 */

var deliveryService = angular.module('forms.deliveryService', []);

deliveryService.controller('DeliveryServiceForm', function($scope, $rootScope, $stateParams, $http, $state, eToast, eUser) {
	if ($stateParams.requestID != null) {
		$scope.requestID = $stateParams.requestID;	
	}
	
	$scope.deliveryService = {
		uName: '',
		uPhone: '',
		dFromLocation: '',
		dToLocation: '',
		dDate: '',
		dTime: '',
		dTypeOfCargo: '',
		dSpecialRequirement: ''
	};

	$scope.request = {
		rTypeOfCargo: '',
		rFromLocation: '',
		rToLocation: '',
		rDeliveryDate: '',
		rDeliveryTime: '',
		rSpecialRequirement: ''
	}

	$scope.requests = [];

	var getRequests = function() {
		loading();
		// connect throught http connection
		$http({
			url: 'http://localhost:80/get-my-request',
			method: 'GET',
			data: {
				'username': eUser.username,
				'password': eUser.password
			},
		}).success(function(data, status, headers, config) {
			if(data == 'FAILED'){
				stopLoading();
				eToast.toastError('Cannot get requests!', 2000);
				$state.go('trackMyRequest');
			}
			else{
				stopLoading();
				$scope.requests = data;
			}
		}).error(function(data, status, headers, config) {
			stopLoading();
			eToast.toastError('There is an error. Please! Try again later.', 2000);
		});
	}

	var deleteRequest = function() {
		loading();
		// connect throught http connection
		$http({
			url: 'http://localhost:80/delete-request/' . $scope.requestID,
			method: 'POST',
			data: {
				'username': eUser.username,
				'password': eUser.password,
				'request-id': $scope.requestID
			},
		}).success(function(data, status, headers, config) {
			if (data == 'SUCCESS') {
				stopLoading();
				eToast.toastInfo('Delete Successfully', 2000);
				$state.go('trackMyRequest');
			} else {
				stopLoading();
				eToast.toastError('Cannot delete!', 2000);
			}
		}).error(function(data, status, headers, config) {
			stopLoading();
			eToast.toastError('There is an error. Please! Try again later.', 2000);
		});
	}

	var bookDeliveryService = function(){
		loading();
		// connect throught http connection
		$http({
			url: 'http://localhost:80/book-delivery-service',
			method: 'POST',
			data: {
				'username': eUser.username,
				'password': eUser.password,
				'request': {
					'from_address' : $scope.deliveryService.dFromLocation,
					'to_address' : $scope.deliveryService.dToLocation,
					'received_time' : $scope.deliveryService.dDate,
					'description' : $scope.deliveryService.dTypeOfCargo
				}
			},
		}).success(function(data, status, headers, config) {
			if (data == 'SUCCESS') {
				stopLoading();
				eToast.toastInfo('Book Successfully', 2000);
				//$state.go('bookDeliveryService');
			} else {
				stopLoading();
				eToast.toastError('Cannot book delivery service', 2000);
			}
		}).error(function(data, status, headers, config) {
			stopLoading();
			eToast.toastError('There is an error. Please! Try again later.', 2000);
		});
	}

	var changeRequestDetail = function(){
		loading();
		// connect throught http connection
		$http({
			url: 'http://localhost:80/change-request-detail',
			method: 'POST',
			data: {
				'username': eUser.username,
				'password': eUser.password,
				'request-id': $scope.requestID,
				'request': {
					'from_address' : $scope.deliveryService.dFromLocation,
					'to_address' : $scope.deliveryService.dToLocation,
					'received_time' : $scope.deliveryService.dDate,
					'description' : $scope.deliveryService.dTypeOfCargo
				}
			},
		}).success(function(data, status, headers, config) {
			if (data == 'SUCCESS') {
				stopLoading();
				eToast.toastInfo('Update request Successfully',2000);
				$state.go('requestDetail');
			} else {
				stopLoading();
				eToast.toastError('Cannot update the request', 2000);
			}
		}).error(function(data, status, headers, config) {
			stopLoading();
			eToast.toastError('There is an error. Please! Try again later.', 2000);
		});
	}

	var verifyBookInfo = function(){
		if($scope.deliveryService.uName.length == 0){
			eToast.toastInfo('Name is required',1000);
		} else if($scope.deliveryService.uPhone.length == 0){
			eToast.toastInfo('Phone is required',1000);
		} else if($scope.deliveryService.dFromLocation.length == 0){
			eToast.toastInfo('From address is required',1000);
		} else if($scope.deliveryService.dToLocation.length == 0){
			eToast.toastInfo('To address is required',1000);
		} else { return 'VALID'; }
	}

	var verifyChangeInfo = function(){
		if($scope.request.rFromLocation.length == 0){
			eToast.toastInfo('From address is required',1000);
		} else if($scope.request.rToLocation.length == 0){
			eToast.toastInfo('To address is required',1000);
		} else { return 'VALID'; }
	}

	$scope.confirmBook = function(){
		var isvalid = verifyBookInfo();
		if(isvalid == 'VALID'){
			//bookDeliveryService();
			eToast.toastInfo('Hello',1000);
		}
	}

	$scope.saveChange = function(){
		var isvalid = verifyChangeInfo();
		if(isvalid == 'VALID'){
			//changeRequestDetail();
			eToast.toastInfo('Hello',1000);
		}
	}

	$scope.deleteRequest = function(){
		if($scope.requestID != null){
			deleteRequest();
			eToast.toastInfo('Hello',1000);
		}
	}
});
