/**
 * starter: Can Duy Cat
 * owner: Nguyen Minh Trang
 * last update: 18-Sep-2015
 * type: sample comment controller
 */

var sample = angular.module('controllers.sample', []);

sample.controller('SampleController', function($scope, $rootScope, $state) {
	/*
	* add new custom sample
	*/
	$scope.addNewSample = function() {
		$state.go('newComment');
	}
});