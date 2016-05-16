


var bookDelivery = angular.module('controllers.bookDelivery', []);

bookDelivery.controller('BookDeliveryController', function($scope, $rootScope) {
	$scope.deliveryService = new DeliveryServiceForm();

	$scope.bookDeliveryService = function(){};
});
