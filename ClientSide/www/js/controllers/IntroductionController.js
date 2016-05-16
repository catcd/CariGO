/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 06-Sep-2015
 * type: introduction controller
 */

var introduction = angular.module('controllers.introduction', []);

introduction.controller('IntroductionController', function($scope, $rootScope) {
	// version
	$scope.version = "0.9";
	
	// email
	$scope.email = "lienhe@truongnha.com";
	
	// tel
	$scope.tel = "1234500458";
	
	// website
	$scope.website = "http://truongnha.com";
});
