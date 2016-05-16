/**
 * starter: Can Duy Cat
 * owner: Can Duy Cat
 * last update: 16/05/2016
 * type: class IntroductionForm
 */

var introduction = angular.module('forms.introduction', []);

introduction.controller('IntroductionForm', function($scope) {
	// version
	$scope.version = "0.9";
	
	// email
	$scope.email = "contact@carigo.com";
	
	// tel
	$scope.tel = "0969422782";
	
	// website
	$scope.website = "https://www.carigo.com";
});
