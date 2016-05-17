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

	$scope.requests = [];

	$scope.getRequests = function() {
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

	$scope.deleteRequest = function(requestID) {
		loading();
		// connect throught http connection
		$http({
			url: 'http://localhost:80/get-request/' . requestID,
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

	$scope.bookService = function(){
		loading();
		// connect throught http connection
		$http({
			url: 'http://localhost:80/book-delivery-service',
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
				eToast.toastInfo('Book Successfully', 2000);
				$state.go('bookDeliveryService');
			} else {
				stopLoading();
				eToast.toastError('Cannot book delivery service', 2000);
			}
		}).error(function(data, status, headers, config) {
			stopLoading();
			eToast.toastError('There is an error. Please! Try again later.', 2000);
		});
	}

	$scope.changeRequestDetail = function(){
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
});
