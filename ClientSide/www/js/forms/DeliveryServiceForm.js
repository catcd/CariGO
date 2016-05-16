/**
 * starter: Can Duy Cat
 * owner: Ngo Duc Dung
 * last update: 16/05/2016
 * type: class DeliveryServiceForm
 */

var deliveryService = angular.module('forms.deliveryService', []);

deliveryService.controller('DeliveryServiceForm', function($scope, $rootScope, $stateParams) {
	if ($stateParams.requestID != null) {
		$scope.requestID = $stateParams.requestID;	
	}
	
	$scope.function = function(argument) {
		// body...
	}
});
